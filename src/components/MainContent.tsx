import { useMemo, useState } from "react";
import "./MainContent.css"
import Search from "./actions/Search";
import Filter from "./actions/Filter";
import FlagCard from "./flag/FlagCard";

const filterOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
const defaultOption = "Filter by Region"

const MainContent = () => {
  const [filterOption, setFilterOption] = useState(defaultOption)
  const [searchText, setSearchText] = useState("")

  const filteredFlags = useMemo(() => {
    if (filterOption === defaultOption && !searchText) return flags

    let filteredFlags = [...flags]
    if (filterOption !== defaultOption) {
      filteredFlags = filteredFlags.filter(flag => flag.region === filterOption)
    }
    if (searchText) {
      filteredFlags = filteredFlags.filter(flag => flag.name.toLowerCase().includes(searchText.toLowerCase()))
    }
    return filteredFlags
  }, [filterOption, searchText])

  return <main className="main-content">
    <div className="main-filter-container">
    <Search searchText={searchText} setSearchText={setSearchText}/>
    <Filter filterOption={filterOption} filterOptions={filterOptions} setFilterOption={setFilterOption} defaultOption={defaultOption}/>
    </div>
    {filteredFlags.map((flag, idx) => (
    <FlagCard key={flag.name + idx} flag={flag}/>
    ))}
  </main>;
};

export default MainContent;

export type FlagType = typeof flags[0]

const flags =  [{
  "name": "United States of America",
  "topLevelDomain": [".us"],
  "alpha2Code": "US",
  "alpha3Code": "USA",
  "callingCodes": ["1"],
  "capital": "Washington, D.C.",
  "altSpellings": ["US", "USA", "United States of America"],
  "subregion": "Northern America",
  "region": "Americas",
  "population": 329484123,
  "latlng": [38, -97],
  "demonym": "American",
  "area": 9629091,
  "gini": 41.4,
  "timezones": [
    "UTC-12:00",
    "UTC-11:00",
    "UTC-10:00",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC+10:00",
    "UTC+12:00"
  ],
  "borders": ["CAN", "MEX"],
  "nativeName": "United States",
  "numericCode": "840",
  "flags": {
    "svg": "https://flagcdn.com/us.svg",
    "png": "https://flagcdn.com/w320/us.png"
  },
  "currencies": [
    {
      "code": "USD",
      "name": "United States dollar",
      "symbol": "$"
    }
  ],
  "languages": [
    {
      "iso639_1": "en",
      "iso639_2": "eng",
      "name": "English",
      "nativeName": "English"
    }
  ],
  "translations": {
    "br": "Stadoù-Unanet",
    "pt": "Estados Unidos",
    "nl": "Verenigde Staten",
    "hr": "Sjedinjene Američke Države",
    "fa": "ایالات متحده آمریکا",
    "de": "Vereinigte Staaten von Amerika",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "アメリカ合衆国",
    "it": "Stati Uniti D'America",
    "hu": "Amerikai Egyesült Államok"
  },
  "flag": "https://flagcdn.com/us.svg",
  "regionalBlocs": [
    {
      "acronym": "NAFTA",
      "name": "North American Free Trade Agreement",
      "otherNames": [
        "Tratado de Libre Comercio de América del Norte",
        "Accord de Libre-échange Nord-Américain"
      ]
    }
  ],
  "cioc": "USA",
  "independent": true
},
{
  "name": "United States of America",
  "topLevelDomain": [".us"],
  "alpha2Code": "US",
  "alpha3Code": "USA",
  "callingCodes": ["1"],
  "capital": "Washington, D.C.",
  "altSpellings": ["US", "USA", "United States of America"],
  "subregion": "Northern America",
  "region": "Americas",
  "population": 329484123,
  "latlng": [38, -97],
  "demonym": "American",
  "area": 9629091,
  "gini": 41.4,
  "timezones": [
    "UTC-12:00",
    "UTC-11:00",
    "UTC-10:00",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC+10:00",
    "UTC+12:00"
  ],
  "borders": ["CAN", "MEX"],
  "nativeName": "United States",
  "numericCode": "840",
  "flags": {
    "svg": "https://flagcdn.com/us.svg",
    "png": "https://flagcdn.com/w320/us.png"
  },
  "currencies": [
    {
      "code": "USD",
      "name": "United States dollar",
      "symbol": "$"
    }
  ],
  "languages": [
    {
      "iso639_1": "en",
      "iso639_2": "eng",
      "name": "English",
      "nativeName": "English"
    }
  ],
  "translations": {
    "br": "Stadoù-Unanet",
    "pt": "Estados Unidos",
    "nl": "Verenigde Staten",
    "hr": "Sjedinjene Američke Države",
    "fa": "ایالات متحده آمریکا",
    "de": "Vereinigte Staaten von Amerika",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "アメリカ合衆国",
    "it": "Stati Uniti D'America",
    "hu": "Amerikai Egyesült Államok"
  },
  "flag": "https://flagcdn.com/us.svg",
  "regionalBlocs": [
    {
      "acronym": "NAFTA",
      "name": "North American Free Trade Agreement",
      "otherNames": [
        "Tratado de Libre Comercio de América del Norte",
        "Accord de Libre-échange Nord-Américain"
      ]
    }
  ],
  "cioc": "USA",
  "independent": true
},{
  "name": "United States of America",
  "topLevelDomain": [".us"],
  "alpha2Code": "US",
  "alpha3Code": "USA",
  "callingCodes": ["1"],
  "capital": "Washington, D.C.",
  "altSpellings": ["US", "USA", "United States of America"],
  "subregion": "Northern America",
  "region": "Americas",
  "population": 329484123,
  "latlng": [38, -97],
  "demonym": "American",
  "area": 9629091,
  "gini": 41.4,
  "timezones": [
    "UTC-12:00",
    "UTC-11:00",
    "UTC-10:00",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC+10:00",
    "UTC+12:00"
  ],
  "borders": ["CAN", "MEX"],
  "nativeName": "United States",
  "numericCode": "840",
  "flags": {
    "svg": "https://flagcdn.com/us.svg",
    "png": "https://flagcdn.com/w320/us.png"
  },
  "currencies": [
    {
      "code": "USD",
      "name": "United States dollar",
      "symbol": "$"
    }
  ],
  "languages": [
    {
      "iso639_1": "en",
      "iso639_2": "eng",
      "name": "English",
      "nativeName": "English"
    }
  ],
  "translations": {
    "br": "Stadoù-Unanet",
    "pt": "Estados Unidos",
    "nl": "Verenigde Staten",
    "hr": "Sjedinjene Američke Države",
    "fa": "ایالات متحده آمریکا",
    "de": "Vereinigte Staaten von Amerika",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "アメリカ合衆国",
    "it": "Stati Uniti D'America",
    "hu": "Amerikai Egyesült Államok"
  },
  "flag": "https://flagcdn.com/us.svg",
  "regionalBlocs": [
    {
      "acronym": "NAFTA",
      "name": "North American Free Trade Agreement",
      "otherNames": [
        "Tratado de Libre Comercio de América del Norte",
        "Accord de Libre-échange Nord-Américain"
      ]
    }
  ],
  "cioc": "USA",
  "independent": true
},{
  "name": "United States of America",
  "topLevelDomain": [".us"],
  "alpha2Code": "US",
  "alpha3Code": "USA",
  "callingCodes": ["1"],
  "capital": "Washington, D.C.",
  "altSpellings": ["US", "USA", "United States of America"],
  "subregion": "Northern America",
  "region": "Americas",
  "population": 329484123,
  "latlng": [38, -97],
  "demonym": "American",
  "area": 9629091,
  "gini": 41.4,
  "timezones": [
    "UTC-12:00",
    "UTC-11:00",
    "UTC-10:00",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC+10:00",
    "UTC+12:00"
  ],
  "borders": ["CAN", "MEX"],
  "nativeName": "United States",
  "numericCode": "840",
  "flags": {
    "svg": "https://flagcdn.com/us.svg",
    "png": "https://flagcdn.com/w320/us.png"
  },
  "currencies": [
    {
      "code": "USD",
      "name": "United States dollar",
      "symbol": "$"
    }
  ],
  "languages": [
    {
      "iso639_1": "en",
      "iso639_2": "eng",
      "name": "English",
      "nativeName": "English"
    }
  ],
  "translations": {
    "br": "Stadoù-Unanet",
    "pt": "Estados Unidos",
    "nl": "Verenigde Staten",
    "hr": "Sjedinjene Američke Države",
    "fa": "ایالات متحده آمریکا",
    "de": "Vereinigte Staaten von Amerika",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "アメリカ合衆国",
    "it": "Stati Uniti D'America",
    "hu": "Amerikai Egyesült Államok"
  },
  "flag": "https://flagcdn.com/us.svg",
  "regionalBlocs": [
    {
      "acronym": "NAFTA",
      "name": "North American Free Trade Agreement",
      "otherNames": [
        "Tratado de Libre Comercio de América del Norte",
        "Accord de Libre-échange Nord-Américain"
      ]
    }
  ],
  "cioc": "USA",
  "independent": true
},{
  "name": "United States of America",
  "topLevelDomain": [".us"],
  "alpha2Code": "US",
  "alpha3Code": "USA",
  "callingCodes": ["1"],
  "capital": "Washington, D.C.",
  "altSpellings": ["US", "USA", "United States of America"],
  "subregion": "Northern America",
  "region": "Americas",
  "population": 329484123,
  "latlng": [38, -97],
  "demonym": "American",
  "area": 9629091,
  "gini": 41.4,
  "timezones": [
    "UTC-12:00",
    "UTC-11:00",
    "UTC-10:00",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC+10:00",
    "UTC+12:00"
  ],
  "borders": ["CAN", "MEX"],
  "nativeName": "United States",
  "numericCode": "840",
  "flags": {
    "svg": "https://flagcdn.com/us.svg",
    "png": "https://flagcdn.com/w320/us.png"
  },
  "currencies": [
    {
      "code": "USD",
      "name": "United States dollar",
      "symbol": "$"
    }
  ],
  "languages": [
    {
      "iso639_1": "en",
      "iso639_2": "eng",
      "name": "English",
      "nativeName": "English"
    }
  ],
  "translations": {
    "br": "Stadoù-Unanet",
    "pt": "Estados Unidos",
    "nl": "Verenigde Staten",
    "hr": "Sjedinjene Američke Države",
    "fa": "ایالات متحده آمریکا",
    "de": "Vereinigte Staaten von Amerika",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "アメリカ合衆国",
    "it": "Stati Uniti D'America",
    "hu": "Amerikai Egyesült Államok"
  },
  "flag": "https://flagcdn.com/us.svg",
  "regionalBlocs": [
    {
      "acronym": "NAFTA",
      "name": "North American Free Trade Agreement",
      "otherNames": [
        "Tratado de Libre Comercio de América del Norte",
        "Accord de Libre-échange Nord-Américain"
      ]
    }
  ],
  "cioc": "USA",
  "independent": true
},
]