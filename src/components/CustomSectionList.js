import React, { useState, useEffect, useRef } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import { Animated } from "react-native";

import Images from '../assets/index'
const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.header}>Stock Volume</Text>
        <Text style={styles.header}>Last Price Change</Text>
        <Text style={styles.header}>Bid Price / Active Price</Text>
    </View>
);

const Item = ({ item, shouldAnimate, onPress }) => {
    const [animatedValue, setAnimatedValue] = React.useState(
        new Animated.Value(shouldAnimate ? 0 : 1)
    );
    const prevShouldAnimateRef = useRef(false);

    useEffect(() => {
        if (shouldAnimate && !prevShouldAnimateRef.current) {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 50,
                useNativeDriver: false,
            }).start(() => {
                // reset the animation value after it's finished
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 50,
                    useNativeDriver: false,
                }).start();
            });
        }
        prevShouldAnimateRef.current = shouldAnimate;
    }, [shouldAnimate]);

    useEffect(() => {
        const listener = animatedValue.addListener(({ value }) => {
            // Handle the animated value update here
        });

        // Unregister the listener when the component is unmounted
        return () => {
            animatedValue.removeListener(listener);
        };
    }, []);

    const animatedStyle = {
        backgroundColor: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "yellow"],
        }),
    };

    return (
        <TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.8}>
            <Animated.View style={[styles.itemContainer, shouldAnimate && animatedStyle]}>
                {/* <View style={styles.itemContainer}> */}
                <View style={styles.stockVolumeData}>
                    <Text style={styles.itemTitle}>{item["3"]}</Text>
                    <Text style={styles.itemDescription}>{item["89"]}</Text>
                </View>

                <View style={styles.lastPriceChangeData}>
                    <Text style={styles.itemTitle}>{item["87"]}</Text>
                    <View style={styles.upLowView}>
                        <Image
                            style={{ width: 10, height: 10, marginRight: 15 }}
                            source={parseFloat(item["273"]) > 0 ? Images.upGreenSmall : Images.downRedSmall}
                        />
                        <Text style={styles.itemDescription}>{`% ${item["273"]}`}</Text>
                    </View>
                </View>

                <View style={styles.bidPriceData}>
                    <Text style={styles.itemTitle}>{item["133"]}</Text>
                    <Text style={styles.itemDescription}>{item["136"]}</Text>
                </View>
                {/* </View> */}
            </Animated.View>
        </TouchableOpacity>
    );
};

const CustomSectionList = ({ dataReceived, animateIndex }) => {
    const handleItemClick = (item) => {
        
    };
    // console.log(`list came ${JSON.stringify(dataReceived)}`);
    const renderItem = ({ item, index }) => {
        const shouldAnimate = index === animateIndex;
        return <Item item={item} shouldAnimate={shouldAnimate} onPress={handleItemClick} />;
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerSeparator} />
            <Header />
            <View style={styles.headerSeparator} />
            {/* <ScrollView style={styles.listContainer}> */}
            <FlatList
                data={dataReceived}
                renderItem={renderItem}
                keyExtractor={(item) => item["2"]}
            />
            {/* </ScrollView> */}
        </View>
    );
};

export default CustomSectionList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#373737",
    },
    headerSeparator: {
        height: 1,
        backgroundColor: "#000",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#373737",
        padding: 8,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#666",
    },
    header: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#ffffff",
    },
    listContainer: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: "#373737",
        padding: 15,
        margin: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#666",
    },
    itemTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    itemDescription: {
        fontSize: 14,
        color: "#fff",
    },

    upLowView: {
        flexDirection: "row",
        alignItems: "center",
    },

    stockVolumeData: {
        flexDirection: "column",
        width: "30%",
        alignItems: "flex-start",
    },

    lastPriceChangeData: {
        flexDirection: "column",
        width: "30%",
        alignItems: "flex-start",
    },

    bidPriceData: {
        flexDirection: "column",
        width: "30%",
        alignItems: "center",
    },
});
