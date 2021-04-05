import React from "react";
import { Image, View } from "react-native";

import i18n from "i18n-js";
import * as Localization from "expo-localization";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import { Container, Instruction, Logo } from "./styles";

import logoImg from "../../assets/logo.png";

i18n.translations = {
  en: {
    instruction: "Insert the code or scan QR Code (if available)",
    info:
      "In your first login, you need connect to same network that the automation panel is connected to.",
  },
  pt: {
    instruction: "Insira o código ou Scaneie o código QR (se disponível)",
    info:
      "Em seu primeiro login, você precisa se conectar à mesma rede à qual o painel de automação está conectado.",
  },
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

const SignIn: React.FC = () => {
  useFonts({ JosefinSans_400Regular });

  return (
    <Container>
      <Logo source={logoImg} />
      <View>
        <Instruction>{i18n.t("instruction")}</Instruction>
        <Instruction>{i18n.t("info")}</Instruction>
      </View>
    </Container>
  );
};

export default SignIn;
