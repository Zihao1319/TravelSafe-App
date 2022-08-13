const SingaporeData = {
  area: { name: "Singapore", code: "SG", areaType: "Country" },
  summary: {
    lastUpdate: "2022-05-18",
    text: "<p>Authorities in Singapore have been relying on strict social distancing measures to tackle periodic COVID-19 outbreaks. Singapore's healthcare system is well-equipped which helped authorities quickly implement health screening and testing measures. Authorities have planned to ease restrictions further in the near term to allow most economic activities to restart after a majority of the population get vaccinated.</p>",
  },
  diseaseRiskLevel: { text: "Medium" },
  diseaseInfection: {
    lastUpdate: "2022-05-22",
    level: "Extreme",
    rate: 883.93,
    infectionMapLink: "https://covidsitrep.moh.gov.sg/",
    trend: "Increase",
  },
  diseaseCases: { lastUpdate: "2022-05-31", deaths: 1389, confirmed: 1303294 },
  dataSources: {
    covidDashboardLink: "https://www.gov.sg/features/covid-19",
    healthDepartmentSiteLink: "https://www.moh.gov.sg/covid-19",
  },
  areaRestrictions: [
    {
      lastUpdate: "2022-05-18",
      text: "<p>Public taxis, buses and trains no longer require the use of  a SafeEntry QR code to board, as of 26 April.</p>",
      restrictionType: "DOMESTIC TRAVEL",
    },
    {
      lastUpdate: "2022-05-18",
      text: "<p>Economic activities which do not carry a high risk of transmission of COVID-19 were allowed to resume; this includes resumption of motor vehicle servicing, air-conditioner servicing, basic pet services and full hairdressing services.</p> <p>Public gatherings and large events are no longer limited to 10 and 1,000 people, respectively; social distancing in indoor and outdoor spaces is no longer mandatory while the use of tracing applications is only required for events of over 500 people. Nightlife venues are capped at 75 percent capacity with masks required in indoor spaces.</p>",
      restrictionType: "OTHER",
    },
  ],
  areaAccessRestriction: {
    transportation: {
      lastUpdate: "2022-05-18",
      text: '<p>There are no explicit flight ban from a specific country. However, many commercial flights remained suspended until further notice. Health screening measures are implemented and transit passengers will be asked to remain in designated facilities within the airport. Scoot, a subsidiary of Singapore Airlines, has resumed regular flight services between Singapore Changi Airport (SIN/WSSS) and several other destinations, including Bali in Indonesia, Taiwan, Australia, Japan and Malaysia.</p> <p><strong>South Korean</strong> authorities increased regular flight services to Singapore from 6 May.</p> <p>International travellers are allowed to transit through Changi Airport (SIN/WSSS), based on requests from airlines. Singapore Airlines, SilkAir and Scoot passengers can transit at Changi Airport if their origin and destination were cities approved for transit flights, or if passengers took a connecting flight to an approved city before transiting. Air France, KLM, Garuda Indonesia, Lufthansa, and Swiss International Air Lines passengers can transit through Singapore from approved cities if they connect to Singapore Airlines or SilkAir flights. More information on transits through Changi Airport to depart for a third country are available <a href="https://safetravel.ica.gov.sg/transit/overview" target="_blank" rel="noopener">here</a>.</p>',
      transportationType: "FLIGHT",
      isBanned: "No",
      throughDate: "indef",
    },
    declarationDocuments: {
      lastUpdate: "2022-05-18",
      text: '<p><strong>Health Insurance document</strong><br>All unvaccinated or partially vaccinated short-term visitors are required to have travel insurance for their COVID-19-related medical treatment and hospitalisation costs in Singapore, with a minimum coverage of 30,000 SGD (22,500 USD). This insurance should be procured before travelling to Singapore. Singapore-based insurer can be found <a href="https://safetravel.ica.gov.sg/health/insurance-and-treatment">here</a>.</p>\n<p><strong>Health document</strong><br>All travellers are required to fill in the health declaration form within the SG Arrival card e-Service web prior to departure. Authorities strongly advise travellers to fill in the form within 72 hours before arrival. The card&#39;s core function is to verify the vaccination status that is necessary to access many activities in the country.</p>\n<p>Singaporean citizens, permanent residents and long-term pass holders who are fully vaccinated are no longer required to apply for the SG Arrival Card to enter the country via its land border checkpoints. Those who received their vaccination in Singapore must have their records reflected in the TraceTogether or HealthHub applications, while others must submit their vaccination record to the Ministry of Health upon their first entry. All other travellers are still required to apply for the card.</p>\n',
      isRequired: "Yes",
      healthDocumentationLink: "https://eservices.ica.gov.sg/sgarrivalcard/",
    },
    entry: {
      lastUpdate: "2022-05-18",
      text: '<p>Authorities have reopened its borders to all fully vaccinated international arrivals from all countries and suspended the many entry schemes for travellers from specific countries, including the Air, Land and Sea Vaccinated Travel Lanes (VTL), as well as the Reciprocal Green Lane (RGL) and Air Travel Pass (ATP), from 1 April. Effective 26 April, fully vaccinated travellers from all countries are allowed entry without testing and quarantine requirements.</p> <p>All long-term pass holders including those with Long-Term Visit Pass (LTVP), In-Principle Approval (IPA), Student’s Pass (STP) and Work Pass, <strong>have to be fully vaccinated</strong> to enter Singapore.</p> <p>Inbound travellers who are <strong>short-term pass holders</strong> who are unvaccinated or partially vaccinated must apply for an entry exemption <a href="https://form.gov.sg/#!/62302595ef39ee0012eed03b" target="_blank" rel="noopener">here</a>.</p> <p>Inbound travellers holding <strong>long-term passes issued by Ministry of Manpower</strong> aged 18 and above who are medically ineligible for vaccines must apply for an entry exemption <a href="https://form.gov.sg/#!/610b4fe79eba440012bddce5" target="_blank" rel="noopener">here</a>.</p> <p>Fully vaccinated long-term pass holders including those with Long-Term Visit Pass (LTVP), In-Principle Approval (IPA), Student’s Pass (STP), excluding Work Permit Holders and minors aged 12 and under, are not required an entry approval to enter the country from 22 February. Other long-term pass holders and immediate relatives of Singapore Citizens/PR holders must get <a href="https://form.gov.sg/#!/62418f45d0df080013bd3cc2" target="_blank" rel="noopener">entry approval</a> from the Immigration and Checkpoints Authority (ICA) prior to making travel plans.</p> <p><strong>Land Borders with Malaysia</strong></p> <p>Fully vaccinated travellers or those unvaccinated aged 12 and under are allowed to travel through the Causeway and Second Link land border checkpoints without quarantine or testing requirements. The checkpoints are operating around the clock and all modes of travel, including public and private transport, are permitted without daily quota restrictions. Inbound travellers to Singapore must have valid documents and apply for the SG Arrival card within three days prior to departure. Those entering via a private vehicle must apply for a <a href="https://onemotoring.lta.gov.sg/content/onemotoring/home.html" target="_blank" rel="noopener">Vehicle Entry Permit</a>.</p> <p>Singaporean citizens, permanent residents and long-term pass holders who are fully vaccinated are no longer required to apply for the SG Arrival Card to enter the country via its land border checkpoints. Those who received their vaccination in Singapore must have their records reflected in the TraceTogether or HealthHub applications, while others must submit their vaccination record to the Ministry of Health upon their first entry. All other travellers are still required to apply for the card.</p> <p>Regular public transport services to and from Malaysia\'s Johor Bahru have resumed. SBS Transit\'s 160, 170 and 170X, SMRT Buses\' 950, Transtar Travel\'s TS1, TS3, TS6 and TS8 and Causeway Link\'s CW1, CW2, CW5 and CW7 are among the resumed lines.</p>',
      ban: "Partial",
      throughDate: "indef",
      referenceLink: "https://safetravel.ica.gov.sg/arriving/overview",
      bannedArea: [
        { code: "AD", areaType: "country" },
        { code: "AE", areaType: "country" },
        { code: "AF", areaType: "country" },
        { code: "AG", areaType: "country" },
        { code: "AI", areaType: "country" },
        { code: "AL", areaType: "country" },
        { code: "AM", areaType: "country" },
        { code: "AO", areaType: "country" },
        { code: "AR", areaType: "country" },
        { code: "AS", areaType: "country" },
        { code: "AT", areaType: "country" },
        { code: "AU", areaType: "country" },
        { code: "AW", areaType: "country" },
        { code: "AZ", areaType: "country" },
        { code: "BA", areaType: "country" },
        { code: "BB", areaType: "country" },
        { code: "BD", areaType: "country" },
        { code: "BE", areaType: "country" },
        { code: "BF", areaType: "country" },
        { code: "BG", areaType: "country" },
        { code: "BH", areaType: "country" },
        { code: "BI", areaType: "country" },
        { code: "BJ", areaType: "country" },
        { code: "BL", areaType: "country" },
        { code: "BM", areaType: "country" },
        { code: "BO", areaType: "country" },
        { code: "BQ", areaType: "country" },
        { code: "BR", areaType: "country" },
        { code: "BS", areaType: "country" },
        { code: "BT", areaType: "country" },
        { code: "BW", areaType: "country" },
        { code: "BY", areaType: "country" },
        { code: "BZ", areaType: "country" },
        { code: "CA", areaType: "country" },
        { code: "CC", areaType: "country" },
        { code: "CD", areaType: "country" },
        { code: "CF", areaType: "country" },
        { code: "CG", areaType: "country" },
        { code: "CH", areaType: "country" },
        { code: "CI", areaType: "country" },
        { code: "CK", areaType: "country" },
        { code: "CL", areaType: "country" },
        { code: "CM", areaType: "country" },
        { code: "CO", areaType: "country" },
        { code: "CR", areaType: "country" },
        { code: "CS", areaType: "country" },
        { code: "CU", areaType: "country" },
        { code: "CV", areaType: "country" },
        { code: "CW", areaType: "country" },
        { code: "CY", areaType: "country" },
        { code: "CZ", areaType: "country" },
        { code: "DE", areaType: "country" },
        { code: "DJ", areaType: "country" },
        { code: "DK", areaType: "country" },
        { code: "DM", areaType: "country" },
        { code: "DO", areaType: "country" },
        { code: "DZ", areaType: "country" },
        { code: "EC", areaType: "country" },
        { code: "EE", areaType: "country" },
        { code: "EG", areaType: "country" },
        { code: "ER", areaType: "country" },
        { code: "ES", areaType: "country" },
        { code: "ET", areaType: "country" },
        { code: "FI", areaType: "country" },
        { code: "FJ", areaType: "country" },
        { code: "FM", areaType: "country" },
        { code: "FO", areaType: "country" },
        { code: "FR", areaType: "country" },
        { code: "GA", areaType: "country" },
        { code: "GB", areaType: "country" },
        { code: "GD", areaType: "country" },
        { code: "GE", areaType: "country" },
        { code: "GF", areaType: "country" },
        { code: "GG", areaType: "country" },
        { code: "GH", areaType: "country" },
        { code: "GI", areaType: "country" },
        { code: "GL", areaType: "country" },
        { code: "GM", areaType: "country" },
        { code: "GN", areaType: "country" },
        { code: "GP", areaType: "country" },
        { code: "GQ", areaType: "country" },
        { code: "GR", areaType: "country" },
        { code: "GT", areaType: "country" },
        { code: "GU", areaType: "country" },
        { code: "GW", areaType: "country" },
        { code: "GY", areaType: "country" },
        { code: "HN", areaType: "country" },
        { code: "HR", areaType: "country" },
        { code: "HT", areaType: "country" },
        { code: "HU", areaType: "country" },
        { code: "ID", areaType: "country" },
        { code: "IE", areaType: "country" },
        { code: "IL", areaType: "country" },
        { code: "IN", areaType: "country" },
        { code: "IQ", areaType: "country" },
        { code: "IR", areaType: "country" },
        { code: "IS", areaType: "country" },
        { code: "IT", areaType: "country" },
        { code: "JE", areaType: "country" },
        { code: "JM", areaType: "country" },
        { code: "JO", areaType: "country" },
        { code: "JP", areaType: "country" },
        { code: "KE", areaType: "country" },
        { code: "KG", areaType: "country" },
        { code: "KH", areaType: "country" },
        { code: "KI", areaType: "country" },
        { code: "KM", areaType: "country" },
        { code: "KN", areaType: "country" },
        { code: "KP", areaType: "country" },
        { code: "KR", areaType: "country" },
        { code: "KW", areaType: "country" },
        { code: "KY", areaType: "country" },
        { code: "KZ", areaType: "country" },
        { code: "LA", areaType: "country" },
        { code: "LB", areaType: "country" },
        { code: "LC", areaType: "country" },
        { code: "LI", areaType: "country" },
        { code: "LK", areaType: "country" },
        { code: "LR", areaType: "country" },
        { code: "LS", areaType: "country" },
        { code: "LT", areaType: "country" },
        { code: "LU", areaType: "country" },
        { code: "LV", areaType: "country" },
        { code: "LY", areaType: "country" },
        { code: "MA", areaType: "country" },
        { code: "MC", areaType: "country" },
        { code: "MD", areaType: "country" },
        { code: "ME", areaType: "country" },
        { code: "MF", areaType: "country" },
        { code: "MG", areaType: "country" },
        { code: "MH", areaType: "country" },
        { code: "MK", areaType: "country" },
        { code: "ML", areaType: "country" },
        { code: "MM", areaType: "country" },
        { code: "MN", areaType: "country" },
        { code: "MQ", areaType: "country" },
        { code: "MR", areaType: "country" },
        { code: "MS", areaType: "country" },
        { code: "MT", areaType: "country" },
        { code: "MU", areaType: "country" },
        { code: "MV", areaType: "country" },
        { code: "MW", areaType: "country" },
        { code: "MX", areaType: "country" },
        { code: "MY", areaType: "country" },
        { code: "MZ", areaType: "country" },
        { code: "NA", areaType: "country" },
        { code: "NC", areaType: "country" },
        { code: "NE", areaType: "country" },
        { code: "NG", areaType: "country" },
        { code: "NI", areaType: "country" },
        { code: "NL", areaType: "country" },
        { code: "NO", areaType: "country" },
        { code: "NP", areaType: "country" },
        { code: "NR", areaType: "country" },
        { code: "OM", areaType: "country" },
        { code: "PA", areaType: "country" },
        { code: "PE", areaType: "country" },
        { code: "PF", areaType: "country" },
        { code: "PG", areaType: "country" },
        { code: "PH", areaType: "country" },
        { code: "PK", areaType: "country" },
        { code: "PL", areaType: "country" },
        { code: "PR", areaType: "country" },
        { code: "PS", areaType: "country" },
        { code: "PT", areaType: "country" },
        { code: "PW", areaType: "country" },
        { code: "PY", areaType: "country" },
        { code: "QA", areaType: "country" },
        { code: "RE", areaType: "country" },
        { code: "RO", areaType: "country" },
        { code: "RS", areaType: "country" },
        { code: "RU", areaType: "country" },
        { code: "RW", areaType: "country" },
        { code: "SA", areaType: "country" },
        { code: "SB", areaType: "country" },
        { code: "SC", areaType: "country" },
        { code: "SD", areaType: "country" },
        { code: "SE", areaType: "country" },
        { code: "SI", areaType: "country" },
        { code: "SJ", areaType: "country" },
        { code: "SK", areaType: "country" },
        { code: "SL", areaType: "country" },
        { code: "SM", areaType: "country" },
        { code: "SN", areaType: "country" },
        { code: "SO", areaType: "country" },
        { code: "SR", areaType: "country" },
        { code: "SS", areaType: "country" },
        { code: "ST", areaType: "country" },
        { code: "SV", areaType: "country" },
        { code: "SX", areaType: "country" },
        { code: "SY", areaType: "country" },
        { code: "SZ", areaType: "country" },
        { code: "TC", areaType: "country" },
        { code: "TD", areaType: "country" },
        { code: "TG", areaType: "country" },
        { code: "TH", areaType: "country" },
        { code: "TJ", areaType: "country" },
        { code: "TL", areaType: "country" },
        { code: "TM", areaType: "country" },
        { code: "TN", areaType: "country" },
        { code: "TO", areaType: "country" },
        { code: "TR", areaType: "country" },
        { code: "TT", areaType: "country" },
        { code: "TV", areaType: "country" },
        { code: "TW", areaType: "country" },
        { code: "TZ", areaType: "country" },
        { code: "UA", areaType: "country" },
        { code: "UG", areaType: "country" },
        { code: "US", areaType: "country" },
        { code: "UY", areaType: "country" },
        { code: "UZ", areaType: "country" },
        { code: "VC", areaType: "country" },
        { code: "VE", areaType: "country" },
        { code: "VG", areaType: "country" },
        { code: "VI", areaType: "country" },
        { code: "VN", areaType: "country" },
        { code: "VU", areaType: "country" },
        { code: "WF", areaType: "country" },
        { code: "WS", areaType: "country" },
        { code: "YE", areaType: "country" },
        { code: "ZA", areaType: "country" },
        { code: "ZM", areaType: "country" },
        { code: "ZW", areaType: "country" },
      ],
      borderBan: [
        { borderType: "maritimeBorderBan", status: "Closed" },
        { borderType: "landBorderBan", status: "Partially Open" },
      ],
    },
    travelTest: {
      lastUpdate: "2022-05-18",
      isRequired: "Yes",
      requirement: "Mandatory",
      referenceLink:
        "https://safetravel.ica.gov.sg/arriving/general-travel/fully-vaccinated, https://safetravel.ica.gov.sg/arriving/general-travel/non-fully-vaccinated",
      travelTestConditionsAndRules: [
        {
          travelPhases: "BEFORE_TRAVEL",
          scenarios: [
            {
              name: "Unvaccinated travellers",
              condition: {
                traveller: {
                  whoNeeds: "All unvaccinated travellers",
                  minimumAge: "12",
                },
                trip: {},
                textualScenario:
                  '<p>Unvaccinated travellers are required to present a negative result of either a PCR test or an antigen rapid test (ART) for COVID-19 taken within 48 hours. Those who have recently recovered from COVID-19 and hold a positive test result taken within 14-90 days prior to departure are exempt from this requirement. Check <a href="https://www.checkfirst.gov.sg/c/192f8f07-deb5-4203-9a47-533b1cb238bc">here</a> for the requirement of a pre-departure test exemption.</p>\n',
              },
              rule: {
                test: [
                  {
                    types: ["PCR", "Antigen"],
                    validity: { delay: "48", referenceDateTime: "Departure" },
                  },
                ],
              },
            },
          ],
        },
        {
          travelPhases: "AFTER_ARRIVAL",
          scenarios: [
            {
              condition: {
                traveller: { whoNeeds: "All unvaccinated travellers" },
                trip: {},
                textualScenario:
                  "<p>All unvaccinated travellers and those who tested positive upon arrival are required to take a PCR test on the exit day of their self-isolation period which falls on day 7.</p>\n",
              },
              rule: { arrivalTestDays: "7" },
            },
          ],
        },
        {
          travelPhases: "UPON_TRAVEL",
          scenarios: [
            {
              condition: {
                traveller: { whoNeeds: "All travellers" },
                trip: {},
                textualScenario:
                  "<p>Symptomatic travellers may be tested upon arrival. Travellers may be subject to a PCR test which would cost 138 SGD (101 USD) or a rapid antigen test which would cost 30 SGD (22 USD).</p>\n",
              },
            },
          ],
        },
      ],
    },
    tracingApplication: {
      lastUpdate: "2022-05-18",
      text: '<p>All inbound travellers are required to download the "TraceTogether" contact tracing mobile app. The app can be downloaded from <a href="https://www.tracetogether.gov.sg/" target="_blank" rel="noopener">https://www.tracetogether.gov.sg/</a>.</p>',
      isRequired: "Yes",
      iosUrl: ["https://apps.apple.com/sg/app/tracetogether/id1498276074"],
      androidUrl: [
        "https://play.google.com/store/apps/details?id=sg.gov.tech.bluetrace&hl=en&gl=US",
      ],
    },
    masks: {
      lastUpdate: "2022-05-18",
      text: "<p>Mask mandate in indoor spaces are in effect.</p> <p>Authorities lifted a mask-wearing requirement in outdoor venues from 29 March.</p>",
      isRequired: "Yes, conditional",
    },
    exit: {
      lastUpdate: "2022-05-18",
      specialRequirements: "No",
      isBanned: "No",
    },
    otherRestrictions: {},
    travelVaccination: {
      lastUpdate: "2022-05-18",
      isRequired: "Yes",
      referenceLink: "https://safetravel.ica.gov.sg/health/vtsg",
      acceptedCertificates: [
        "Not Specified",
        " Vietnam certificate",
        " Japan certificate",
      ],
      qualifiedVaccines: [
        {
          supportedVaccineProducts: "Pfizer",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "AstraZeneca (Vaxzevria)",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Vaxevria (South Korea)",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Covishield (India)",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Johnson & Johnson",
          numberOfDoses: 1,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Sinopharm (Beijing)",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "CoronaVac",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Moderna",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "CanSinoBIO",
          numberOfDoses: 1,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Covaxin",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Nuvaxovid (Novavax)",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
        {
          supportedVaccineProducts: "Covovax (Novavax)",
          numberOfDoses: 2,
          expiration: { expiresAfter: "14" },
          boosterRequired: "No",
        },
      ],
      details:
        '<p>Travellers aged 13 and above are considered fully vaccinated after receiving the recommended doses of WHO-approved vaccines. Those who recovered from COVID-19 with a valid positive result taken within 14-90 days prior to departure may be exempted from a pre-departure testing requirements. Travellers may confirm if they are eligible for this exemption <a href="https://www.checkfirst.gov.sg/c/7f36b15e-3d3d-4b95-a904-7a5de6c6ddfb" target="_blank" rel="noopener">here</a>.</p> <p>Singapore authorities recognize digital vaccine certificates from <a href="https://safetravel.ica.gov.sg/files/acceptedvaccinationcertificate.pdf" target="_blank" rel="noopener">selected countries</a>. These travellers are able to present their vaccination apps issued or recognized by their own country of origin. Additionally, travellers may check if their digital vaccine certificate can be verified upon boarding via the <a href="https://eservices.ica.gov.sg/STO1/VCP" target="_blank" rel="noopener">Vaccination Check Portal (VCP) web</a>.</p> <p>Singaporean citizens, permanent residents and long-term pass holders who are fully vaccinated are no longer required to apply for the SG Arrival Card to enter the country via its land border checkpoints.</p> <p>Full vaccination against COVID-19 is required for applying for residency, long-term passes (visas) and work passes. Only children below the age of 12 and those medically exempt from vaccination are exempt from this requirement.</p>',
      minimumAge: 12,
      vaccinatedTravellers: {
        policy: "Yes",
        exemptions: "Entry Ban, Quarantine, Testing",
      },
    },
    travelQuarantineModality: {
      lastUpdate: "2022-05-18",
      text: "<p>All travellers who are unvaccinated, partially vaccinated, tested positive upon arrival and those without valid certificates are required to undergo a 7-day quarantine (stay-at-home notice) at their place of residence or at government-approved facilities. These travellers will be tested with a PCR test before the end of quarantine on Day 7. Non-compliance will result in the issuance of an electronic monitoring device and subsequent breaches would result in penalties such as imprisonment, among other measures.</p>\n<p>Fully vaccinated travellers and those who have recovered from COVID-19 are no longer required to quarantine after arrival.</p>\n<p>Travellers are not allowed to use trains or buses to reach their quarantine place. Private vehicles, Taxis or cars from ride-hailing apps are allowed.</p>\n",
      eligiblePerson: "Some travellers",
      quarantineType: "Hybrid",
      duration: 7,
      referenceLink:
        "https://safetravel.ica.gov.sg/arriving/general-travel/non-fully-vaccinated",
      quarantineOnArrivalAreas: [
        { code: "AD", areaType: "country" },
        { code: "AE", areaType: "country" },
        { code: "AF", areaType: "country" },
        { code: "AG", areaType: "country" },
        { code: "AI", areaType: "country" },
        { code: "AL", areaType: "country" },
        { code: "AM", areaType: "country" },
        { code: "AO", areaType: "country" },
        { code: "AR", areaType: "country" },
        { code: "AS", areaType: "country" },
        { code: "AT", areaType: "country" },
        { code: "AU", areaType: "country" },
        { code: "AW", areaType: "country" },
        { code: "AZ", areaType: "country" },
        { code: "BA", areaType: "country" },
        { code: "BB", areaType: "country" },
        { code: "BD", areaType: "country" },
        { code: "BE", areaType: "country" },
        { code: "BF", areaType: "country" },
        { code: "BG", areaType: "country" },
        { code: "BH", areaType: "country" },
        { code: "BI", areaType: "country" },
        { code: "BJ", areaType: "country" },
        { code: "BL", areaType: "country" },
        { code: "BM", areaType: "country" },
        { code: "BN", areaType: "country" },
        { code: "BO", areaType: "country" },
        { code: "BQ", areaType: "country" },
        { code: "BR", areaType: "country" },
        { code: "BS", areaType: "country" },
        { code: "BT", areaType: "country" },
        { code: "BW", areaType: "country" },
        { code: "BY", areaType: "country" },
        { code: "BZ", areaType: "country" },
        { code: "CA", areaType: "country" },
        { code: "CC", areaType: "country" },
        { code: "CD", areaType: "country" },
        { code: "CF", areaType: "country" },
        { code: "CG", areaType: "country" },
        { code: "CH", areaType: "country" },
        { code: "CI", areaType: "country" },
        { code: "CK", areaType: "country" },
        { code: "CL", areaType: "country" },
        { code: "CM", areaType: "country" },
        { code: "CN", areaType: "country" },
        { code: "CO", areaType: "country" },
        { code: "CR", areaType: "country" },
        { code: "CS", areaType: "country" },
        { code: "CU", areaType: "country" },
        { code: "CV", areaType: "country" },
        { code: "CW", areaType: "country" },
        { code: "CY", areaType: "country" },
        { code: "CZ", areaType: "country" },
        { code: "DE", areaType: "country" },
        { code: "DJ", areaType: "country" },
        { code: "DK", areaType: "country" },
        { code: "DM", areaType: "country" },
        { code: "DO", areaType: "country" },
        { code: "DZ", areaType: "country" },
        { code: "EC", areaType: "country" },
        { code: "EE", areaType: "country" },
        { code: "EG", areaType: "country" },
        { code: "ER", areaType: "country" },
        { code: "ES", areaType: "country" },
        { code: "ET", areaType: "country" },
        { code: "FI", areaType: "country" },
        { code: "FJ", areaType: "country" },
        { code: "FM", areaType: "country" },
        { code: "FO", areaType: "country" },
        { code: "FR", areaType: "country" },
        { code: "GA", areaType: "country" },
        { code: "GB", areaType: "country" },
        { code: "GD", areaType: "country" },
        { code: "GE", areaType: "country" },
        { code: "GF", areaType: "country" },
        { code: "GG", areaType: "country" },
        { code: "GH", areaType: "country" },
        { code: "GI", areaType: "country" },
        { code: "GL", areaType: "country" },
        { code: "GM", areaType: "country" },
        { code: "GN", areaType: "country" },
        { code: "GP", areaType: "country" },
        { code: "GQ", areaType: "country" },
        { code: "GR", areaType: "country" },
        { code: "GT", areaType: "country" },
        { code: "GU", areaType: "country" },
        { code: "GW", areaType: "country" },
        { code: "GY", areaType: "country" },
        { code: "HK", areaType: "country" },
        { code: "HN", areaType: "country" },
        { code: "HR", areaType: "country" },
        { code: "HT", areaType: "country" },
        { code: "HU", areaType: "country" },
        { code: "ID", areaType: "country" },
        { code: "IE", areaType: "country" },
        { code: "IL", areaType: "country" },
        { code: "IN", areaType: "country" },
        { code: "IQ", areaType: "country" },
        { code: "IR", areaType: "country" },
        { code: "IS", areaType: "country" },
        { code: "IT", areaType: "country" },
        { code: "JE", areaType: "country" },
        { code: "JM", areaType: "country" },
        { code: "JO", areaType: "country" },
        { code: "JP", areaType: "country" },
        { code: "KE", areaType: "country" },
        { code: "KG", areaType: "country" },
        { code: "KH", areaType: "country" },
        { code: "KI", areaType: "country" },
        { code: "KM", areaType: "country" },
        { code: "KN", areaType: "country" },
        { code: "KP", areaType: "country" },
        { code: "KR", areaType: "country" },
        { code: "KW", areaType: "country" },
        { code: "KY", areaType: "country" },
        { code: "KZ", areaType: "country" },
        { code: "LA", areaType: "country" },
        { code: "LB", areaType: "country" },
        { code: "LC", areaType: "country" },
        { code: "LI", areaType: "country" },
        { code: "LK", areaType: "country" },
        { code: "LR", areaType: "country" },
        { code: "LS", areaType: "country" },
        { code: "LT", areaType: "country" },
        { code: "LU", areaType: "country" },
        { code: "LV", areaType: "country" },
        { code: "LY", areaType: "country" },
        { code: "MA", areaType: "country" },
        { code: "MC", areaType: "country" },
        { code: "MD", areaType: "country" },
        { code: "ME", areaType: "country" },
        { code: "MF", areaType: "country" },
        { code: "MG", areaType: "country" },
        { code: "MH", areaType: "country" },
        { code: "MK", areaType: "country" },
        { code: "ML", areaType: "country" },
        { code: "MM", areaType: "country" },
        { code: "MN", areaType: "country" },
        { code: "MO", areaType: "country" },
        { code: "MQ", areaType: "country" },
        { code: "MR", areaType: "country" },
        { code: "MS", areaType: "country" },
        { code: "MT", areaType: "country" },
        { code: "MU", areaType: "country" },
        { code: "MV", areaType: "country" },
        { code: "MW", areaType: "country" },
        { code: "MX", areaType: "country" },
        { code: "MY", areaType: "country" },
        { code: "MZ", areaType: "country" },
        { code: "NA", areaType: "country" },
        { code: "NC", areaType: "country" },
        { code: "NE", areaType: "country" },
        { code: "NG", areaType: "country" },
        { code: "NI", areaType: "country" },
        { code: "NL", areaType: "country" },
        { code: "NO", areaType: "country" },
        { code: "NP", areaType: "country" },
        { code: "NR", areaType: "country" },
        { code: "NZ", areaType: "country" },
        { code: "OM", areaType: "country" },
        { code: "PA", areaType: "country" },
        { code: "PE", areaType: "country" },
        { code: "PF", areaType: "country" },
        { code: "PG", areaType: "country" },
        { code: "PH", areaType: "country" },
        { code: "PK", areaType: "country" },
        { code: "PL", areaType: "country" },
        { code: "PR", areaType: "country" },
        { code: "PS", areaType: "country" },
        { code: "PT", areaType: "country" },
        { code: "PW", areaType: "country" },
        { code: "PY", areaType: "country" },
        { code: "QA", areaType: "country" },
        { code: "RE", areaType: "country" },
        { code: "RO", areaType: "country" },
        { code: "RS", areaType: "country" },
        { code: "RU", areaType: "country" },
        { code: "RW", areaType: "country" },
        { code: "SA", areaType: "country" },
        { code: "SB", areaType: "country" },
        { code: "SC", areaType: "country" },
        { code: "SD", areaType: "country" },
        { code: "SE", areaType: "country" },
        { code: "SI", areaType: "country" },
        { code: "SJ", areaType: "country" },
        { code: "SK", areaType: "country" },
        { code: "SL", areaType: "country" },
        { code: "SM", areaType: "country" },
        { code: "SN", areaType: "country" },
        { code: "SO", areaType: "country" },
        { code: "SR", areaType: "country" },
        { code: "SS", areaType: "country" },
        { code: "ST", areaType: "country" },
        { code: "SV", areaType: "country" },
        { code: "SX", areaType: "country" },
        { code: "SY", areaType: "country" },
        { code: "SZ", areaType: "country" },
        { code: "TC", areaType: "country" },
        { code: "TD", areaType: "country" },
        { code: "TG", areaType: "country" },
        { code: "TH", areaType: "country" },
        { code: "TJ", areaType: "country" },
        { code: "TL", areaType: "country" },
        { code: "TM", areaType: "country" },
        { code: "TN", areaType: "country" },
        { code: "TO", areaType: "country" },
        { code: "TR", areaType: "country" },
        { code: "TT", areaType: "country" },
        { code: "TV", areaType: "country" },
        { code: "TW", areaType: "country" },
        { code: "TZ", areaType: "country" },
        { code: "UA", areaType: "country" },
        { code: "UG", areaType: "country" },
        { code: "US", areaType: "country" },
        { code: "UY", areaType: "country" },
        { code: "UZ", areaType: "country" },
        { code: "VC", areaType: "country" },
        { code: "VE", areaType: "country" },
        { code: "VG", areaType: "country" },
        { code: "VI", areaType: "country" },
        { code: "VN", areaType: "country" },
        { code: "VU", areaType: "country" },
        { code: "WF", areaType: "country" },
        { code: "WS", areaType: "country" },
        { code: "YE", areaType: "country" },
        { code: "ZA", areaType: "country" },
        { code: "ZM", areaType: "country" },
        { code: "ZW", areaType: "country" },
      ],
    },
    areaHealthPass: {
      lastUpdate: "2022-05-18",
      isRequired: "Yes",
      applicationGuidance:
        "<p>From 26 April, the COVID-19 pass which is integrated in the TraceTogether or SafeEntry applications are only required for entry to all large events with more 500 attendees or more, restaurants, bars, karaoke venues and nightlife establishments. Unvaccinated individuals may enter restaurants, provided they have a negative COVID-19 test result certificate.</p>",
      obtentionMethods:
        '<p>Individuals may access their online vaccination certificate either via the Singpass, TraceTogether or SafeEntry applications which can be used to gain entry to areas. </p> <p>Short-term visitors to Singapore can request for vaccination stickers to be affixed to their passports by providing proof of their full vaccination at Level 2 Information Counter, at Immigration and Checkpoints Authority Building between 08:00 and 16:30 on weekdays, and from 08:00 to 12:30pm on Saturdays. Alternatively, citizens and long-term stay non-Singaporean individuals may access their proof of vaccine <a href="https://saml.singpass.gov.sg/spservice/welcome" target="_blank" rel="noopener">here</a>.</p> <p>All people aged 18 and above are required a booster dose within 270 days after the completion of primary COVID-19 doses to maintain full vaccination status from 14 February.</p>',
      referenceLink: "https://www.singpass.gov.sg/main",
    },
  },
  areaPolicy: {
    lastUpdate: "2022-05-18",
    text: "<p>Authorities require the public to be fully vacccinated to enter or participate in certain activities, including dine-in services in restaurants or live performances with 500 or more attendants.</p>",
    status: "Opening",
    startDate: "2020-06-14",
    endDate: "indef",
    referenceLink: "https://www.moh.gov.sg/covid-19-phase-advisory",
  },
  relatedArea: [{ methods: ["GET"], rel: "Parent" }],
  areaVaccinated: [
    {
      lastUpdate: "2022-05-09",
      vaccinationDoseStatus: "oneDose",
      percentage: 85.702,
    },
    {
      lastUpdate: "2022-05-23",
      vaccinationDoseStatus: "fully",
      percentage: 91.46,
    },
  ],
  type: "covid19-area-report",
};

export default SingaporeData;
