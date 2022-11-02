import React, { FC, useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackScreenName } from "../setup/screens";
import { CommonClasses } from "../styles/CommonClasses";

interface PreviewProps {
    navigation: NativeStackNavigationProp<any>
}

const {width, height} = Dimensions.get('window');

const slides = [
    {
        id: 1,
        title: 'Главный плюс приложения описание его и тп вещи',
    },
    {
        id: 2,
        title: 'Главный плюс приложения описание его и тп вещи',
    },
    {
        id: 3,
        title: 'Главный плюс приложения описание его и тп вещи',
    },
];

interface SlideProps {
    id: number
    title: string
}

const Slide: FC<SlideProps> = ({title}) => {
    return (
        <View style={{alignItems: 'center', width: width}}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const Preview: FC<PreviewProps> = ({navigation}) => {
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
    const ref = useRef<any>();

    const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({offset});
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const moveToSlide = (index: number) => {
        const offset =  index * width;
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(index);
    }

    const Footer = () => {
        return (
            <View style={CommonClasses.container}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    {slides.map((_, index) => (
                        <TouchableOpacity
                            onPress={()=>{moveToSlide(index)}}
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: '#F49E72',
                                    width: 10,
                                    opacity: 1
                                },
                            ]}
                        />
                    ))}
                </View>
                <View>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{height: 64, marginBottom: 40}}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.navigate(StackScreenName.HOME_ROOT)}>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                    GET STARTED
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{height: 64, marginBottom: 40}}>
                            <View style={{width: 15}}/>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={styles.btn}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                    }}>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{height: 190, marginTop: 300}}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({item}) => <Slide id={item.id} title={item.title}/>}
            />
            <Footer/>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
    },
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: '#ffffff',
        opacity: 0.2,
        marginHorizontal: 6,
        borderRadius: 50,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Preview;
