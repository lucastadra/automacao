/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from "react";
import { View, StatusBar } from "react-native";

const App: React.FC = () => (
    <>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#152348"
            translucent
        />
        <View style={{ flex: 1, backgroundColor: "#192A56" }} />
    </>
);

export default App;
