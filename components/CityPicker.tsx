"user client";

import React, { useState } from 'react'
import Select from 'react-select'
import { Country, State, City } from 'country-state-city';
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import { useRouter } from 'next/navigation';
import { GlobeIcon } from "@heroicons/react/solid"


type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    },
    lable: string
} | null| undefined ;

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    },
    lable: string
} | null| undefined;



const options = Country.getAllCountries().map
    ((country) => ({
        value: {
            latitude: country.latitude,
            longitude: country.longitude,
            isoCode: country.isoCode,
        },
        lable: country.name
    }))

const city = City.getAllCities()

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityOption>(null);
    const router = useRouter();


    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option);
        setSelectedCity(null);
    }

    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option);
        router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
    }

    return (
        <div className='space-y-4'>
            <div className='space-y-2'>
                <div className='flex items-center space-x-2 text-white/80'>
                    <GlobeIcon className='h-5 w-5 text-white' />
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className='text-black'
                    options={options}
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    getOptionLabel={(options) => options['lable']}
                    getOptionValue={(options) => options['lable']}
                />
            </div>

            {selectedCountry && (
                <div className='space-y-2'>
                    <div className='flex items-center space-x-2 text-white/80'>
                        <GlobeIcon className='h-5 w-5 text-white' />
                        <label htmlFor="country">City</label>
                    </div>
                    <Select
                        className='text-black'
                        options={City.getCitiesOfCountry(
                            selectedCountry.value.isoCode)?.map((state) => ({
                                value: {
                                    latitude: state.latitude,
                                    longitude: state.longitude,
                                    countryCode: state.countryCode,
                                    name: state.name,
                                    stateCode: state.stateCode
                                },
                                lable: state.name
                            }))}
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        getOptionLabel={(options) => options['lable']}
                        getOptionValue={(options) => options['lable']}
                    />
                </div>
            )}

        </div>
    )
}

export default CityPicker;
