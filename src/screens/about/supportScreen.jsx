import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

import config from "../../config/configProvider";
import Banner from "../../components/banner/banner";
import ScrollIndicatorWrapper from "../../components/scrollIndicatorWrapper/scrollIndicatorWrapper";

let localStyle;

class SupportScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View style={localStyle.wrapper}>
        <Banner
          nav={navigation}
          title="Anlaufstellen für seelische Unterstützung"
          noMenu
        />
        <View style={{ ...localStyle.flexi, ...localStyle.wrapper }}>
          <ScrollIndicatorWrapper
            contentData={
              <View style={localStyle.content}>
                <Text style={localStyle.p}>
                  Wenn Sie sich in einer Situation befinden, die Sie nicht mehr
                  ertragen können, holen Sie sich auf jeden Fall Hilfe. Sollten
                  Sie das Bedürfnis nach professioneller Unterstützung haben,
                  können Sie sich an die folgenden Anlaufstellen wenden.
                </Text>
                <Text style={[localStyle.u, localStyle.bold]}>
                  Krisendienste:
                </Text>
                <Text style={localStyle.p}>
                  <Text style={[localStyle.u]}>Telefon-Seelsorge:{"\n"}</Text>
                  Rat bei Problemen und Krisen in jeder Lebenssituation:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("tel://0800 111 0 111")}
                  >
                    0800 111 0 111
                  </Text>{" "}
                  oder{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("tel://0800 111 0 222")}
                  >
                    0800 111 0 222
                  </Text>{" "}
                  oder{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL("https://www.telefonseelsorge.de")
                    }
                  >
                    www.telefonseelsorge.de
                  </Text>
                  , täglich 0-24 Uhr.
                </Text>
                <Text style={localStyle.p}>
                  <Text style={[localStyle.u]}>
                    Krisendienst Psychiatrie:{"\n"}
                  </Text>
                  Der Krisendienst Psychiatrie ist ein Angebot zur
                  psychiatrischen Soforthilfe. Menschen in seelischen Krisen,
                  Mitbetroffene und Angehörige erhalten hier qualifizierte
                  Beratung und Unterstützung, rund um die Uhr. Tel.:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("tel://0800 655 3000")}
                  >
                    0800 655 3000
                  </Text>
                  , täglich 0-24 Uhr.{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL("https://www.krisendienst-psychiatrie.de")
                    }
                  >
                    www.krisendienst-psychiatrie.de
                  </Text>
                </Text>
                <Text style={localStyle.p}>
                  <Text style={[localStyle.u]}>Die Arche:{"\n"}</Text>
                  Hauptaufgabe des Vereins ARCHE ist die ambulante
                  Suizidprävention und Krisenintervention. Dazu bietet sie
                  Beratung für Menschen in Lebenskrisen, bei Suizidgefährdung
                  und nach einem Suizidversuch an (Nachsorge). Tel.:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("tel://089 334041")}
                  >
                    089 334041.
                  </Text>
                  Montag bis Freitag, 9-17 Uhr.{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("https://www.die-arche.de")}
                  >
                    www.die-arche.de
                  </Text>
                </Text>
                <Text style={localStyle.p}>
                  <Text style={[localStyle.u]}>
                    Weitere Anlaufstellen:{"\n"}
                  </Text>
                  Übersicht der Anlaufstellen für seelische Krisen und
                  Suizidalität in München (ÄKBV):{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.aekbv.de/images/stories/aerzte/Vernetzte_Versorgung/SeelischeKriesenA4.pdf"
                      )
                    }
                  >
                    https://www.aekbv.de/images/stories/aerzte/Vernetzte_Versorgung/SeelischeKriesenA4.pdf
                  </Text>
                </Text>
                <Text style={[localStyle.u, localStyle.bold]}>
                  Anlaufstellen für eine ambulante Psychotherapie:
                </Text>
                <Text style={localStyle.p}>
                  Webseite der Kassenärztlichen Bundesvereinigung (KBV) –
                  Service für Patient*innen:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.kbv.de/html/service_fuer_patienten.php"
                      )
                    }
                  >
                    www.kbv.de/html/service_fuer_patienten.php
                  </Text>
                </Text>
                <Text style={localStyle.p}>
                  Patient*innenservice 116117 – ambulante Psychotherapie:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.116117.de/de/psychotherapie.php"
                      )
                    }
                  >
                    www.116117.de/de/psychotherapie.php
                  </Text>
                </Text>
                <Text style={localStyle.p}>
                  Terminservicestelle Psychotherapie der Kassenärztlichen
                  Vereinigung Bayern (KVB):{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.kvb.de/service/patienten/terminservicestelle-bayern"
                      )
                    }
                  >
                    www.kvb.de/service/patienten/terminservicestelle-bayern,
                  </Text>{" "}
                  Tel:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("tel://116117")}
                  >
                    116117
                  </Text>
                </Text>
                <Text style={localStyle.p}>
                  Koordinationsstelle Psychotherapie der Kassenärztlichen
                  Vereinigung Bayern (KVB):{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL(
                        "www.kvb.de/service/patienten/koordinationsstelle-psychotherapie,"
                      )
                    }
                  >
                    www.kvb.de/service/patienten/koordinationsstelle-psychotherapie,
                  </Text>{" "}
                  Tel:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() => Linking.openURL("tel://0921 78776540410")}
                  >
                    0921 78776540410
                  </Text>
                </Text>
                <Text style={localStyle.p}>
                  Psychotherapeutensuche der Bundespsychotherapeutenkammer:{" "}
                  <Text
                    style={localStyle.link}
                    onPress={() =>
                      Linking.openURL("https://www.wege-zu-psychotherapie.org")
                    }
                  >
                    www.wege-zur-psychotherapie.org
                  </Text>
                </Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

localStyle = StyleSheet.create({
  wrapper: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: config.theme.values.defaultBackgroundColor,
  },
  content: {
    marginTop: config.appConfig.scaleUiFkt(20),
    marginBottom: config.appConfig.scaleUiFkt(20),
    marginLeft: config.appConfig.scaleUiFkt(40),
    marginRight: config.appConfig.scaleUiFkt(40),
  },

  flexi: {
    flex: 3,
  },

  title: {
    ...config.theme.fonts.title,
    textAlign: "center",
    alignSelf: "center",
    color: config.theme.values.defaultTitleTextColor,
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: config.appConfig.scaleUiFkt(15),
    marginBottom: config.appConfig.scaleUiFkt(35),
  },

  infoText: {
    alignSelf: "auto",
    color: config.theme.colors.accent4,
    ...config.theme.fonts.body,
    fontSize: 14,
  },

  titleText: {
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    ...config.theme.fonts.header2,
  },
  link: {
    color: config.theme.colors.primary,
    textDecorationLine: "underline",
    paddingRight: "25%",
  },
  p: {
    marginVertical: 10,
  },
  u: {
    textDecorationLine: "underline",
  },
  bold: {
    fontWeight: "bold",
  },
});
export default SupportScreen;
