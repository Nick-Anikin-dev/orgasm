import React, { useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import { CommonClasses } from "../styles/CommonClasses";
import Header from "../components/Header";
import { CardClasses } from "../styles/CardClasses";
import EducationMarker from "../components/EducationMarker";
import Collapser from "../components/Collapser";
import { TECHNIQUES_TEXTS_RU } from "../constants/INTERFACE_TEXTS";
import { Technique } from "../types";

const Techniques = () => {
    const [ openedTechnique, setOpenedTechnique ] = useState<Technique | null>(null)

    const openTechnique = (technique: Technique) => {
        openedTechnique === technique ? setOpenedTechnique(null) : setOpenedTechnique(technique)
    }

    return (
        <ScrollView style={CommonClasses.container}>
            <Header/>
            <View style={CardClasses.info}>
                <EducationMarker accentColor="#A06AF9"/>
                <View>
                    <Text style={CardClasses.title}>Техники</Text>
                    <Text style={CardClasses.description}>Описание техник</Text>
                </View>
            </View>
            <Collapser
                title="Вступительная" shortDescription="Short description"
                callback={() => openTechnique(Technique.INTRODUCTORY)}
                isOpen={openedTechnique === Technique.INTRODUCTORY}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.introductory}
                </Text>
            </Collapser>
            <Collapser title="Вибрации" shortDescription="Short description"
                       callback={() => openTechnique(Technique.VIBRATION)}
                       isOpen={openedTechnique === Technique.VIBRATION}
            >
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Разведение" shortDescription="Short description"
                       callback={() => openTechnique(Technique.BREEDING)}
                       isOpen={openedTechnique === Technique.BREEDING}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Три фаланги" shortDescription="Short description"
                       callback={() => openTechnique(Technique.THREE_PHALANGES)}
                       isOpen={openedTechnique === Technique.THREE_PHALANGES}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Половые губы" shortDescription="Short description"
                       callback={() => openTechnique(Technique.LABIA)}
                       isOpen={openedTechnique === Technique.LABIA}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Скользкие губки" shortDescription="Short description"
                       callback={() => openTechnique(Technique.SLIPPERY_LIPS)}
                       isOpen={openedTechnique === Technique.SLIPPERY_LIPS}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Поглаживание" shortDescription="Short description"
                       callback={() => openTechnique(Technique.STROKING)}
                       isOpen={openedTechnique === Technique.STROKING}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Сквирт" shortDescription="Short description"
                       callback={() => openTechnique(Technique.SQUIRT)}
                       isOpen={openedTechnique === Technique.SQUIRT}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Маточное удовольствие" shortDescription="Short description"
                       callback={() => openTechnique(Technique.ROYAL_PLEASURE)}
                       isOpen={openedTechnique === Technique.ROYAL_PLEASURE}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Маточное удовольствие 2" shortDescription="Short description"
                       callback={() => openTechnique(Technique.ROYAL_PLEASURE_V2)}
                       isOpen={openedTechnique === Technique.ROYAL_PLEASURE_V2}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Множественный оргазм" shortDescription="Short description"
                       callback={() => openTechnique(Technique.MULTIPLE_ORGASM)}
                       isOpen={openedTechnique === Technique.MULTIPLE_ORGASM}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="50-25-10" shortDescription="Short description"
                       callback={() => openTechnique(Technique.FIFTY_TWENTY_FIVE_TEN)}
                       isOpen={openedTechnique === Technique.FIFTY_TWENTY_FIVE_TEN}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Кролик" shortDescription="Short description"
                       callback={() => openTechnique(Technique.RABBIT)}
                       isOpen={openedTechnique === Technique.RABBIT}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Точка К" shortDescription="Short description"
                       callback={() => openTechnique(Technique.POINT_K)}
                       isOpen={openedTechnique === Technique.POINT_K}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Для продвинутых" shortDescription="Short description"
                       callback={() => openTechnique(Technique.FOR_ADVANCED)}
                       isOpen={openedTechnique === Technique.FOR_ADVANCED}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Клавиши" shortDescription="Short description"
                       callback={() => openTechnique(Technique.KEYS)}
                       isOpen={openedTechnique === Technique.KEYS}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="ANAL PLUS" shortDescription="Short description"
                       callback={() => openTechnique(Technique.ANAL_PLUS)}
                       isOpen={openedTechnique === Technique.ANAL_PLUS}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Мост с игрушками" shortDescription="Short description"
                       callback={() => openTechnique(Technique.BRIDGE_WITH_TOYS)}
                       isOpen={openedTechnique === Technique.BRIDGE_WITH_TOYS}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Рельеф" shortDescription="Short description"
                       callback={() => openTechnique(Technique.RELIEF)}
                       isOpen={openedTechnique === Technique.RELIEF}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="ANAL+G" shortDescription="Short description"
                       callback={() => openTechnique(Technique.ANAL_PLUS_G)}
                       isOpen={openedTechnique === Technique.ANAL_PLUS_G}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Грудь" shortDescription="Short description"
                       callback={() => openTechnique(Technique.BREAST)}
                       isOpen={openedTechnique === Technique.BREAST}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
            <Collapser title="Бусы" shortDescription="Short description"
                       callback={() => openTechnique(Technique.BEADS)}
                       isOpen={openedTechnique === Technique.BEADS}>
                <Text style={{color:'#fff'}}>
                    {TECHNIQUES_TEXTS_RU.vibration}
                </Text>
            </Collapser>
        </ScrollView>
    );
};

export default Techniques;
