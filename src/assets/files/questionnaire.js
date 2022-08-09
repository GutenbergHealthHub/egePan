export default {
  resourceType: "Questionnaire",
  url: "http://hl7.org/fhir/Questionnaire/Fragebogen_egePan_vierteljaehrlich",
  identifier: [
    {
      use: "official",
      system: "urn:UMOID:",
      value: "Fragebogen egePan vierteljährlich",
    },
  ],
  version: "0.1",
  title: "Fragebogen egePan Beispiel",
  status: "draft",
  subjectType: ["Patient"],
  date: "2021-01-25",
  publisher: "UMM",
  purpose:
    "Vierteljährliche Befragung zum Monitoring der psychischen Belastung der Mitarbeiter*Innen",
  item: [
    {
      linkId: "1",
      text: "Abschnitt 1",
      type: "group",
      required: true,
      item: [
        {
          linkId: "1.1",
          definition: "ckont",
          text: "Haben Sie in den letzten drei Monaten Patient*innen mit Verdacht auf SARS-CoV-2-Infektion oder mit bestätigter SARS-CoV-2-Infektion in direktem Kontakt behandelt?",
          type: "choice",
          required: true,
          answerOption: [
            {
              valueCoding: {
                system: "urn:egePan:SAM:ckont",
                code: 1,
                display: "Keines von beiden",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:ckont",
                code: 2,
                display:
                  "Ja, ich habe Patient*innen mit Verdacht aus SARS-CoV-2-Infektion in direktem Kontakt behandelt.",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:ckont",
                code: 3,
                display:
                  "Ja, ich habe Patient*innen mit bestätigter SARS-CoV-2-Infektion in direktem Kontakt behandelt.",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:ckont",
                code: 4,
                display:
                  "Ich habe sowohl Patient*innen mit Verdacht als auch mit bestätigter SARS-CoV-2-Infektion in direktem Kontakt behandelt.",
              },
            },
          ],
        },
        {
          linkId: "1.2",
          definition: "test",
          text: "Eigene Infektion\n\nWurden Sie in den letzten drei Monaten selbst auf das Vorliegen von COVID-19 getestet?",
          type: "choice",
          required: true,
          answerOption: [
            {
              valueCoding: {
                system: "urn:egePan:SAM:test",
                code: "j",
                display: "Ja",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:test",
                code: "n",
                display: "Nein",
              },
            },
          ],
          item: [
            {
              linkId: "1.2.1",
              definition: "test01",
              text: "War der Test auf COVID-19 positiv oder negativ?",
              type: "choice",
              required: true,
              enableWhen: [
                {
                  question: "1.2",
                  operator: "=",
                  answerCoding: {
                    system: "urn:egePan:SAM:test",
                    code: "j",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:test01",
                    code: 1,
                    display: "Positiv",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:test01",
                    code: 2,
                    display: "Negativ",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:test01",
                    code: 3,
                    display: "Kein Ergebnis",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "1.3",
          definition: "impf",
          text: "Impfung\n\nWurden Sie gegen COVID-19 geimpft?",
          type: "choice",
          required: true,
          answerOption: [
            {
              valueCoding: {
                system: "urn:egePan:SAM:impf",
                code: "j",
                display: "Ja",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:impf",
                code: "n",
                display: "Nein",
              },
            },
          ],
          item: [
            {
              linkId: "1.3.1",
              definition: "impf01",
              text: "Haben Sie die gesamte Anzahl an vorgesehenen Impfdosen erhalten?",
              type: "choice",
              required: true,
              enableWhen: [
                {
                  question: "1.3",
                  operator: "=",
                  answerCoding: {
                    system: "urn:egePan:SAM:impf",
                    code: "j",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:impf1",
                    code: "j",
                    display: "Ja",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:impf1",
                    code: "n",
                    display: "Nein",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: "2",
      text: "Abschnitt 2",
      type: "group",
      required: true,
      item: [
        {
          linkId: "2.1",
          definition: "sexb",
          text: "Haben Sie in den letzten 3 Monaten eine Form sexueller Belästigung erlebt?",
          type: "choice",
          required: true,
          answerOption: [
            {
              valueCoding: {
                system: "urn:egePan:SAM:sexb",
                code: "j",
                display: "Ja",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:sexb",
                code: "n",
                display: "Nein",
              },
            },
          ],
        },
        {
          linkId: "2.2",
          definition: "mob",
          text: "Wie werden Sie von den Arbeitskollegen/-innen behandelt? Wie stark stimmen Sie folgenden Aussagen zu?",
          type: "group",
          required: true,
          item: [
            {
              linkId: "2.2.1",
              definition: "mob01",
              text: "Ich werde von den anderen wie Luft behandelt.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 3,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 4,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "2.2.2",
              definition: "mob02",
              text: "Hinter meinem Rücken wird schlecht über mich gesprochen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 3,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 4,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "2.2.3",
              definition: "mob03",
              text: "Meine Arbeitskollegen/-innen spielen mir übel mit.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 3,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 4,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "2.2.4",
              definition: "mob04",
              text: "Ich bin einem regelrechten Psychoterror ausgesetzt.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 3,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mob",
                    code: 4,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "2.3",
          definition: "comp",
          text: "Bitte beantworten Sie die folgenden Fragen so, wie sie für Sie im Allgemeinen zutreffen, d.h. so, wie Sie an einem typischen Arbeitstag vorliegen. Die Fragen sind als Aussagen formuliert. Bitte geben Sie auf der 5-stufigen Antwortskala an, inwiefern Sie den Aussagen für Ihren Arbeitsplatz im Allgemeinen zustimmen können.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "2.3.1",
              definition: "comp01",
              text: "Bei meiner Arbeit bearbeite ich immer nur eine Aufgabe zur gleichen Zeit.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 1,
                    display: "Stimme voll zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 2,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 3,
                    display: "teils, teils",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 4,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 5,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
              ],
            },
            {
              linkId: "2.3.2",
              definition: "comp02",
              text: "Die Aufgaben in meiner Arbeit sind einfach und unkompliziert.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 1,
                    display: "Stimme voll zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 2,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 3,
                    display: "teils, teils",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 4,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 5,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
              ],
            },
            {
              linkId: "2.3.3",
              definition: "comp03",
              text: "Meine Arbeit kann fast jeder ohne große Einarbeitung machen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 1,
                    display: "Stimme voll zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 2,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 3,
                    display: "teils, teils",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 4,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 5,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
              ],
            },
            {
              linkId: "2.3.4",
              definition: "comp04",
              text: "Meine Arbeit ist nicht besonders anspruchsvoll.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 1,
                    display: "Stimme voll zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 2,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 3,
                    display: "teils, teils",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 4,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:comp",
                    code: 5,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: "3",
      text: "Abschnitt 3",
      type: "group",
      required: true,
      item: [
        {
          linkId: "3.1",
          definition: "cerq",
          text: "Wie gehen Sie mit Ereignissen um? Jedem von uns passieren hin und wieder negative oder unangenehme Ereignisse und jeder reagiert darauf auf seine/ihre eigene Art. Für die folgenden Aussagen werden Sie gebeten anzugeben, was Sie in den letzten drei Monaten dachten, wenn Sie negative oder unangenehme Ereignisse erlebt haben.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.1.1",
              definition: "cerq01",
              text: "Ich dachte, dass ich akzeptieren muss, was passiert ist.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.2",
              definition: "cerq02",
              text: "Ich dachte an schönere Dinge als an das, was ich erlebt habe.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.3",
              definition: "cerq03",
              text: "Ich dachte, dass ich aufgrund dessen, was geschehen ist, einstärkerer Mensch werden kann.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.4",
              definition: "cerq04",
              text: "Ich dachte, dass ich die Situation akzeptieren muss.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.5",
              definition: "cerq05",
              text: "Ich habe überlegt, wie ich am besten mit der Situation umgehen kann.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.6",
              definition: "cerq06",
              text: "Ich dachte, die Situation hat auch ihre positiven Seiten.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.7",
              definition: "cerq07",
              text: "Ich dachte, dass es gar nicht so schlimm war im Vergleich zu anderen Dingen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.8",
              definition: "cerq08",
              text: "Ich dachte an etwas Schönes, anstatt an das, was passiert ist.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.9",
              definition: "cerq09",
              text: "Ich habe mir gesagt, es gibt schlimmere Dinge im Leben.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.10",
              definition: "cerq10",
              text: "Ich habe versucht, die Situation aus einer losgelösten Perspektive, wie von außen, zu betrachten",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
            {
              linkId: "3.1.11",
              definition: "cerq11",
              text: "Ich habe versucht, michvon der Situation und meinen Gefühlen zu distanzieren.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 1,
                    display: "(fast) nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 3,
                    display: "Regelmäßig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 4,
                    display: "Häufig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cerq",
                    code: 5,
                    display: "(fast) immer",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.2",
          definition: "crea",
          text: "Die Corona-Pandemie verändert unser persönliches, wirtschaftliches und gesellschaftliches Leben. Wie ist ihre Einschätzung zu den folgenden Aussagen?",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.2.1",
              definition: "crea01",
              text: "Ich erwarte, dass ich persönlich aufgrund der Corona-Pandemie etwas Positives für mein Leben lernen werde.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 3,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.2.2",
              definition: "crea02",
              text: "Ich denke, dass sich die Gesellschaft und unser Zusammenleben wegen der Corona-Pandemie langfristig zum Besseren verändern wird.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 3,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:crea",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.3",
          definition: "jck",
          text: "Geben Sie ihre Zustimmung zu den folgenden Aussagen an",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.3.1",
              definition: "jck01",
              text: "Ich stelle die Arbeitsbedingungen auf den Prüfstand, die mir bei der Aufgabenerfüllung helfen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.2",
              definition: "jck02",
              text: "Ich stelle die Arbeitsbedingungen auf den Prüfstand, die mich bei der Aufgabenerfüllung behindern.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.3",
              definition: "jck03",
              text: "Ich nehme mir Zeit die Arbeitsbedingungen, die mich motivieren, zu betrachten.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.4",
              definition: "jck04",
              text: "Ich denke regelmäßig im Nachhinein über mein Handeln bei der Arbeit nach.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.5",
              definition: "jck05",
              text: "Ich mache mir Gedanken darüber, was mir bei der Arbeit nicht so leicht fällt.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.6",
              definition: "jck06",
              text: "Ich hinterfrage während einer Tätigkeit mein eigenes Vorgehen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.7",
              definition: "jck07",
              text: "Ich behalte im Blick, ob mir ausreichend Ressourcen für die Anforderungen bei der Arbeit zur Verfügung stehen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.8",
              definition: "jck08",
              text: "Ich erkenne, wenn das Verhältnis zwischen den Arbeitsanforderungen und meinen Möglichkeiten aus dem Gleichgewicht gerät.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.9",
              definition: "jck09",
              text: "Ich behalte im Blick, ob mir die Arbeitsanforderungen zu viel werden.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.10",
              definition: "jck10",
              text: "Ich weiß, wie ich durch mein Handeln meine Arbeitsbedingungen verbessern kann.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.11",
              definition: "jck11",
              text: "Ich weiß, wie ich hinderliche (ungünstige, überfordernde, beeinträchtigende) Anforderungen verringern kann.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.3.12",
              definition: "jck12",
              text: "Ich weiß, wie ich hilfreiche Bedingungen bei der Arbeit fördern kann.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:jck",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.4",
          definition: "an",
          text: "Erfährt Ihre Arbeit Anerkennung und Wertschätzung durch die Öffentlichkeit?",
          type: "choice",
          required: true,
          answerOption: [
            {
              valueCoding: {
                system: "urn:egePan:SAM:an",
                code: 1,
                display: "Trifft gar nicht zu",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:an",
                code: 2,
                display: "Trifft eher nicht zu",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:an",
                code: 3,
                display: "Trifft mittelmäßig zu",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:an",
                code: 4,
                display: "Trifft überwiegend zu",
              },
            },
            {
              valueCoding: {
                system: "urn:egePan:SAM:an",
                code: 5,
                display: "Trifft völlig zu",
              },
            },
          ],
        },
        {
          linkId: "3.5",
          definition: "gf",
          text: "Nehmen Sie bitte zu den folgenden Überzeugungen Stellung",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.5.1",
              definition: "cgef01",
              text: "Das Virus wird absichtlich als gefährlich dargestellt, um die Öffentlichkeit in die Irre zu führen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.5.2",
              definition: "cgef02",
              text: "Experten täuschen uns absichtlich und zu ihrem eigenen Vorteil, obwohl das Virus eigentlich nicht schlimmer ist als eine Grippe.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.5.3",
              definition: "cgef03",
              text: "Man sollte den Experten glauben wenn Sie sagen, dass das Virus gefährlich ist.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:cgef",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.6",
          definition: "ec",
          text: "Bitte geben Sie an, wie stark Sie den folgenden Aussagen zustimmen",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.6.1",
              definition: "ec01",
              text: "Die tatsächlichen Hintergründe der Corona-Erkrankung werden nie ans Licht der Öffentlichkeit kommen",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.6.2",
              definition: "ec02",
              text: "Die Corona-Krise wurde so groß geredet, damit einige wenige von ihr profitieren",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 5,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ec",
                    code: 6,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.7",
          definition: "ocbh",
          text: "Geben Sie an, wie sehr Sie den folgenden Aussagen zustimmen",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.7.1",
              definition: "ocbh01",
              text: "Ich helfe anderen, wenn diese mit Arbeit überlastet sind.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.7.2",
              definition: "ocbh02",
              text: "Ich wirke bei auftretenden Meinungsverschiedenheiten ausgleichend auf Kollegen/Kolleginnen ein.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.7.3",
              definition: "ocbh03",
              text: "Ich ergreife freiwillig die Initiative, neuen Kollegen/Kolleginnen bei der Einarbeitung zu helfen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.7.4",
              definition: "ocbh04",
              text: "Ich bemühe mich aktiv darum, Schwierigkeiten mit Kollegen/ Kolleginnen vorzubeugen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.7.5",
              definition: "ocbh05",
              text: "Ich ermuntere Kollegen/Kolleginnen, wenn diese niedergeschlagen sind.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Weder noch",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 6,
                    display: "Stimme größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 7,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.8",
          definition: "sk",
          text: "Geben Sie ihre Zustimmung zu den folgenden Aussagen an",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.8.1",
              definition: "sk01",
              text: "Die Führungskräfte fühlen sich der Vermeidung von Stress verpflichtet und beteiligt sich daran.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.8.2",
              definition: "sk02",
              text: "Wenn Beschäftigte Lösungen zu Problemen der psychischen Gesundheit einbringen, finden diese in unserer Klinik Gehör.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.8.3",
              definition: "sk03",
              text: "Die Interessenvertretung der Beschäftigten in unserer Klinik (z.B. Personalrat) wird bei Themen der psychischen Gesundheit miteinbezogen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.8.4",
              definition: "sk04",
              text: "Alle Ebenen (Mitarbeitende sowie Inhaber von Funktionsstellen) in unserer Klinik haben die  Möglichkeit, bei der Vermeidung von Stress mitzuwirken.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:sk",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.9",
          definition: "au",
          text: "Geben Sie ihre Zustimmung zu den folgenden Aussagen an",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.9.1",
              definition: "au01",
              text: "Meine Arbeit ermöglicht es mir, Initiative zu übernehmen und nach eigenem Ermessen zu handeln.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.9.2",
              definition: "au02",
              text: "Ich kann bei meiner Arbeit viele Entscheidungen selbstständig treffen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
            {
              linkId: "3.9.3",
              definition: "au03",
              text: "Meine Arbeit gewährt mir einen großen Entscheidungsspielraum.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 1,
                    display: "Stimme überhaupt nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 2,
                    display: "Stimme eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 3,
                    display: "Neutral",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 4,
                    display: "Stimme eher zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ocbh",
                    code: 5,
                    display: "Stimme voll und ganz zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.10",
          definition: "oss",
          text: "Bitte geben Sie ihre Einschätzung zu den folgenden Aussagen",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.10.1",
              definition: "oss01",
              text: "Wie viele Menschen stehen Ihnen so nahe, dass Sie sich auf Sie verlassen können, wenn Sie ernste persönliche Probleme haben?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss01",
                    code: 1,
                    display: "Keine",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss01",
                    code: 2,
                    display: "1 bis 2",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss01",
                    code: 3,
                    display: "3 bis 5",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss01",
                    code: 4,
                    display: "6 oder mehr",
                  },
                },
              ],
            },
            {
              linkId: "3.10.2",
              definition: "oss02",
              text: "Wie viel Anteilnahme und Interesse zeigen andere Menschen an dem, was Sie tun?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss2",
                    code: 1,
                    display: "Keine",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss2",
                    code: 2,
                    display: "Wenig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss2",
                    code: 3,
                    display: "Weder viel noch wenig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss2",
                    code: 4,
                    display: "Viel",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss2",
                    code: 5,
                    display: "Sehr viel",
                  },
                },
              ],
            },
            {
              linkId: "3.10.3",
              definition: "oss03",
              text: "Wie einfach ist es für Sie, praktische Hilfe von Nachbarn zu erhalten, wenn Sie diese benötigen?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss3",
                    code: 1,
                    display: "Sehr schwierig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss3",
                    code: 2,
                    display: "Schwierig",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss3",
                    code: 3,
                    display: "Möglich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss3",
                    code: 4,
                    display: "Einfach",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:oss3",
                    code: 5,
                    display: "Sehr einfach",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.11",
          definition: "asu",
          text: "Bitte geben Sie ihre Einschätzung zu den folgenden Aussagen an",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.11.1",
              definition: "asu01",
              text: "Wie sehr können Sie sich auf Ihre/n Vorgesetzte/n verlassen, wenn bei der Arbeit Probleme auftauchen?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 1,
                    display: "Nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 3,
                    display: "Oft",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 4,
                    display: "Immer",
                  },
                },
              ],
            },
            {
              linkId: "3.11.2",
              definition: "asu02",
              text: "Wie sehr ist Ihr/e Vorgesetzte/r bereit, Ihre Probleme bei der Arbeit anzuhören?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 1,
                    display: "Nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 3,
                    display: "Oft",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 4,
                    display: "Immer",
                  },
                },
              ],
            },
            {
              linkId: "3.11.3",
              definition: "asu03",
              text: "Wie sehr unterstützt Sie Ihr/e Vorgesetzte/r aktiv so, dass Sie es bei der Arbeit leichter haben?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 1,
                    display: "Nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 3,
                    display: "Oft",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 4,
                    display: "Immer",
                  },
                },
              ],
            },
            {
              linkId: "3.11.4",
              definition: "asu04",
              text: "Wie sehr können Sie sich auf Ihre Kolleg*innen verlassen, wenn bei der Arbeit Probleme auftauchen?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 1,
                    display: "Nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 3,
                    display: "Oft",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 4,
                    display: "Immer",
                  },
                },
              ],
            },
            {
              linkId: "3.11.5",
              definition: "asu05",
              text: "Wie sehr sind Ihre Kolleg*innen bereit, Ihre Probleme bei der Arbeit anzuhören?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 1,
                    display: "Nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 3,
                    display: "Oft",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 4,
                    display: "Immer",
                  },
                },
              ],
            },
            {
              linkId: "3.11.6",
              definition: "asu06",
              text: "Wie sehr unterstützen Sie Ihre Kolleg*innen aktiv so, dass Sie es bei der Arbeit leichter haben?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 1,
                    display: "Nie",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 2,
                    display: "Manchmal",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 3,
                    display: "Oft",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:asu",
                    code: 4,
                    display: "Immer",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.12",
          definition: "gf",
          text: "Die folgenden Aussagen beziehen sich auf den Umgang Ihrer Führungskraft mit Merkmalen der Arbeit, die für Ihre Gesundheit relevant sein könnten. Bitte bewerten Sie, inwieweit die folgenden Aussagen für Ihre Führunskraft zutreffen.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.12.1",
              definition: "gf01",
              text: "Meine Führungskraft merkt sofort, wenn mit mir gesundheitlich etwas nicht stimmt.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.2",
              definition: "gf02",
              text: "Meine Führungskraft merkt rechtzeitig, wann ich eine Erholungspause brauche.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.3",
              definition: "gf03",
              text: "Meine Führungskraft merkt es mir an, wenn ich gesundheitlich an meine Grenzen stoße.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.4",
              definition: "gf04",
              text: "Meine Führungskraft merkt häufig erst zu spät, dass Sie mir zu viel zugemutet hat.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.5",
              definition: "gf05",
              text: "Meine Führungskraft bemerkt es oft gar nicht, wenn Sie mich überfordert.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.6",
              definition: "gf06",
              text: "Meine Führungskraft weiß, welche Situationen mich besonders stressen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.7",
              definition: "gf07",
              text: "Meine Gesundheit ist meiner Führungskraft sehr wichtig.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.8",
              definition: "gf08",
              text: "Meiner Führungskraft ist es wichtig, die gesundheitlichen Belastungen an meinem Arbeitsplatz zu mindern und Risiken abzubauen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.9",
              definition: "gf09",
              text: "Meine Führungskraft fühlt sich dafür verantwortlich, auf meine Gesundheit zu achten.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.10",
              definition: "gf10",
              text: "Meine Führungskraft motiviert mich zu einer gesunden Lebensweise (z.B. gesunde Ernährung, nicht rauchen, Sport).",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.11",
              definition: "gf11",
              text: "Meine Führungskraft motiviert mich immer wieder, auch in meiner Freizeit etwas für meine Gesundheit zu tun.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.12",
              definition: "gf12",
              text: "Meine Führungskraft versucht, mir in puncto Gesundheit ein Vorbild zu sein.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.13",
              definition: "gf13",
              text: "Meine Führungskraft sorgt dafür, dass ich ausreichend Entspannung und Erholung finde.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.14",
              definition: "gf14",
              text: "Wenn wir längere Zeit Stress hatten, sorgt Meine Führungskraft dafür, dass es im Team auch mal wieder ruhiger zugeht.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.15",
              definition: "gf15",
              text: "Meine Führungskraft fordert mich dazu auf, Sie auf gesundheitliche Risiken an meinem Arbeitsplatz hinzuweisen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.16",
              definition: "gf16",
              text: "Wenn ich gestresst wirke, spricht mich meine Führungskraft darauf an und versucht, Lösungen aufzuzeigen.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.17",
              definition: "gf17",
              text: "Meine Führungskraft sorgt dafür, dass das Thema Gesundheit bei uns nicht zu kurz kommt.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.18",
              definition: "gf18",
              text: "Meine Führungskraft motiviert mich, Angebote der Gesundheitsförderung in Anspruch zu nehmen (z.B. Rückenschule, Entspannung, Stressmanagement).",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.19",
              definition: "gf19",
              text: "Meine Führungskraft sorgt durch Verbesserungen im Bereich Arbeitsorganisation dafür, dass meine Belastungen reduziert werden (z.B. Prioritäten setzen, für ungestörtes Arbeiten sorgen, Tagesplanung).",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.20",
              definition: "gf20",
              text: "Meine Führungskraft sorgt durch Verbesserungen im Bereich Arbeitsbedingungen dafür, dass meine Belastungen reduziert werden (z.B. einseitige Körperhaltungen vermeiden, für genügend Platz sorgen, Zugluft meiden).",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.21",
              definition: "gf21",
              text: "Meine Führungskraft sorgt durch Verbesserungen im Bereich Arbeitszeit dafür, dass meine Belastungen reduziert werden (z.B. Pausen einhalten).",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "3.12.22",
              definition: "gf22",
              text: "Meine Führungskraft sorgt durch die Förderung eines positiven Umgangs untereinander dafür, dass meine Belastungen reduziert werden.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 1,
                    display: "Trifft gar nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 2,
                    display: "Trifft eher nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 3,
                    display: "Trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 4,
                    display: "Trifft überwiegend zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:gf",
                    code: 5,
                    display: "Trifft völlig zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "3.13",
          definition: "mf",
          text: "Bitte schätzen Sie die folgenden Aussagen ein.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "3.13.1",
              definition: "mf01",
              text: "Ist Ihre Arbeit sinnvoll?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 1,
                    display: "In sehr geringem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 2,
                    display: "In geringem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 3,
                    display: "Zum Teil",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 4,
                    display: "In hohem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 5,
                    display: "In sehr hohem Maß",
                  },
                },
              ],
            },
            {
              linkId: "3.13.2",
              definition: "mf02",
              text: "Haben Sie das Gefühl, dass Ihre Arbeit wichtig ist?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 1,
                    display: "In sehr geringem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 2,
                    display: "In geringem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 3,
                    display: "Zum Teil",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 4,
                    display: "In hohem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 5,
                    display: "In sehr hohem Maß",
                  },
                },
              ],
            },
            {
              linkId: "3.13.3",
              definition: "mf03",
              text: "Fühlen Sie sich motiviert und eingebunden in Ihre Arbeit?",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 1,
                    display: "In sehr geringem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 2,
                    display: "In geringem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 3,
                    display: "Zum Teil",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 4,
                    display: "In hohem Maß",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:mf",
                    code: 5,
                    display: "In sehr hohem Maß",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: "4",
      text: "Abschnitt 4",
      type: "group",
      required: true,
      item: [
        {
          linkId: "4.1",
          definition: "ir",
          text: "Bitte schätzen Sie die folgenden Aussagen ein.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "4.1.1",
              definition: "ir01",
              text: "Es fällt mir schwer, nach der Arbeit abzuschalten.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "4.1.2",
              definition: "ir02",
              text: "Ich muss auch zu Hause an Schwierigkeiten bei der Arbeit denken.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "4.1.3",
              definition: "ir03",
              text: "Wenn andere mich ansprechen, kommt es vor, dass ich mürrisch reagiere.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "4.1.4",
              definition: "ir04",
              text: "Selbst im Urlaub muss ich manchmal an Probleme bei der Arbeit denken.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "4.1.5",
              definition: "ir05",
              text: "Ich fühle mich ab und zu wie jemand, den man als Nervenbündel bezeichnet.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "4.1.6",
              definition: "ir06",
              text: "Ich reagiere gereizt, obwohl ich es gar nicht will.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
            {
              linkId: "4.1.7",
              definition: "ir07",
              text: "Wenn ich müde von der Arbeit nach Hause komme, bin ich ziemlich nervös.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 1,
                    display: "trifft überhaupt nicht",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 2,
                    display: "trifft größtenteils nicht zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 3,
                    display: "trifft wenig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 4,
                    display: "trifft mittelmäßig zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 5,
                    display: "trifft etwas zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 6,
                    display: "trifft größtenteils zu",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:ir",
                    code: 7,
                    display: "trifft fast völlig zu",
                  },
                },
              ],
            },
          ],
        },
        {
          linkId: "4.2",
          definition: "az",
          text: "Wenn Sie Ihre Arbeitssituation insgesamt betrachten, wie zufrieden sind Sie mit...",
          type: "group",
          required: true,
          item: [
            {
              linkId: "4.2.1",
              definition: "az01",
              text: "... Ihren Berufsperspektiven?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "4.2.2",
              definition: "az02",
              text: "... den Leuten, mit denen Sie arbeiten?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "4.2.3",
              definition: "az03",
              text: "... den körperlichen Arbeitsbedingungen?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "4.2.4",
              definition: "az04",
              text: "... der Art und Weise, wie Ihre Abteilung geführt wird?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "4.2.5",
              definition: "az05",
              text: "... der Art und Weise, wie Ihre Fähigkeiten genutzt werden?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "4.2.6",
              definition: "az06",
              text: "... den Herausforderungen und Fertigkeiten, die Ihre Arbeit beinhaltet?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "4.2.7",
              definition: "az07",
              text: "... Ihrer Arbeit insgesamt, unter Berücksichtigung aller Umstände?",
              type: "integer",
              required: true,
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Sehr unwahrscheinlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Sehr wahrscheinlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: 0,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
          ],
        },
        {
          linkId: "4.3",
          definition: "toi",
          text: "Bitte schätzen Sie die folgenden Aussagen ein.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "4.3.1",
              definition: "toi01",
              text: "Innerhalb des nächsten Jahres werde ich zu einem anderen Arbeitgeber wechseln.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 1,
                    display: "Sehr unwahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 2,
                    display: "Unwahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 3,
                    display: "50/50",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 4,
                    display: "Wahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 5,
                    display: "Sehr wahrscheinlich",
                  },
                },
              ],
            },
            {
              linkId: "4.3.2",
              definition: "toi02",
              text: "Ich werde meinen Arbeitsplatz in den kommenden Monaten wechseln.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 1,
                    display: "Sehr unwahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 2,
                    display: "Unwahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 3,
                    display: "50/50",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 4,
                    display: "Wahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 5,
                    display: "Sehr wahrscheinlich",
                  },
                },
              ],
            },
            {
              linkId: "4.3.3",
              definition: "toi03",
              text: "Ich werde wohl noch längere Zeit in dieser Organisation arbeiten.",
              type: "choice",
              required: true,
              answerOption: [
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 1,
                    display: "Sehr unwahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 2,
                    display: "Unwahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 3,
                    display: "50/50",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 4,
                    display: "Wahrscheinlich",
                  },
                },
                {
                  valueCoding: {
                    system: "urn:egePan:SAM:toi",
                    code: 5,
                    display: "Sehr wahrscheinlich",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: "5",
      text: "Abschnitt 5",
      type: "group",
      required: true,
      item: [
        {
          linkId: "5.1",
          text: "Bitte geben Sie Ihre Beurteilung ab.\n Um S.A.M. als Anwendung zu bewerten, füllen Sie bitte den nachfolgenden Fragebogen aus. Er besteht aus Gegensatzpaaren von Eigenschaften, die S.A.M. haben kann. Entscheiden Sie möglichst spontan. Es ist wichtig, dass Sie nicht lange über die Begriffe nachdenken, damit Ihre unmittelbare Einschätzung zum Tragen kommt.",
          type: "group",
          required: true,
          item: [
            {
              linkId: "5.1.1",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher unterstützend als behindernd einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqp01",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst behindernd",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst unterstützend",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.2",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher einfach als kompliziert einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqp02",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst kompliziert",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst einfach",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.3",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher effizient als ineffizient einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqp03",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst ineffizient",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst effizient",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.4",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher übersichtlich als verwirrend einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqp04",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst verwirrend",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst übersichtlich",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.5",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher spannend als langweilig einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqph01",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst langweilig",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst spannend",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.6",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher interessant als uninteressant einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqph02",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst uninteressant",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst interessant",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.7",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher originell als konventionell einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqph03",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst konventionell",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst originell",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
            {
              linkId: "5.1.8",
              text: "Mit dieser Beurteilung sagen Sie aus, dass Sie das Produkt eher neuartig als herkömmlich einschätzen.",
              type: "integer",
              required: true,
              definition: "ueqph04",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "slider",
                      },
                    ],
                  },
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/LowRangeLabel",
                  valueString: "Äußerst herkömmlich",
                },
                {
                  url: "https://num-compass.science/fhir/StructureDefinition/HighRangeLabel",
                  valueString: "Äußerst neuartig",
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                  valueInteger: 1,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/minValue",
                  valueInteger: -3,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/maxValue",
                  valueInteger: 3,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
