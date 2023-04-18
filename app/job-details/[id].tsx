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
    const onRefresh = () => {}

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
                            />
                            <JobTabs 
                            />
                        </View>
                    }
                </ScrollView>
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