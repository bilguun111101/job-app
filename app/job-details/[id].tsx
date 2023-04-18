import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    RefreshControl,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import { useCallback, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";

import {
    JobTabs,
    Company,
    JobAbout,
    JobFooter,
    Specifics,
    ScreenHeaderBtn
} from "../../components";
import { useFetch } from "../../hooks";
import { COLORS, icons, SIZES } from "../../constants";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    // styles
        const {
            content,
            container
        } = styles;
    // -
    
    const {
        data,
        error,
        refetch,
        isLoading
    } = useFetch('job-details', {
        job_id: params.id
    });

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs.at(0));

    const onRefresh = () => {}

    const displayTabContent = () => {
        switch(activeTab) {
            case 'Qualifications':
                return <Specifics
                    title="Qualifications"
                    points={data.at(0).job_highlights?.Qualifications ?? ['N/A']}
                />
            case 'About':
                return <JobAbout
                    info={data.at(0).job_description ?? "No data provided"}
                />
            case 'Responsibilities':
                return <Specifics
                    title="Responsibilities"
                    points={data.at(0).job_highlights?.Responsibilities ?? ['N/A']}
                />
        }
    }

    return (
        <SafeAreaView style={container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension={'60%'}
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension={'60%'}
                        />
                    ),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? 
                        <ActivityIndicator size='large' color={COLORS.primary} />
                            : error ?
                        <Text>Something went wrong</Text>
                            : data.length === 0 ?
                        <Text>No data</Text>
                            :
                        <View style={content}>
                            <Company
                                companyLogo={data.at(0).employer_logo}
                                jobTitle={data.at(0).job_title}
                                companyName={data.at(0).employer_name}
                                location={data.at(0).job_country}
                            />
                            <JobTabs 
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                            { displayTabContent() }
                        </View>
                    }
                </ScrollView>

                <JobFooter url={data.at(0)?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
            </>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    content: {
        padding: SIZES.medium,
        paddingBottom: 100
    }
})

export default JobDetails;