import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES, } from "../constants";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { NearByjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    // styles 
    const { container, content } = styles;
    // -
    const router = useRouter();

    return (
        <SafeAreaView style={container}>
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite
                    },
                    headerShadowVisible: false,
                    headerLeft: () => ( <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" /> ),
                    headerRight: () => ( <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" /> ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={content}>
                    <Welcome />
                    <Popularjobs />
                    <NearByjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    content: {
        flex: 1,
        padding: SIZES.medium
    }
})

export default Home;