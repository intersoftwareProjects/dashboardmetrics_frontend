import * as React from "react";
import Router from "next/router";
import { SiteNavbar } from "@/components/common/site_navbar";
import Head from "next/head";
import { Checkbox, Select, SelectItem, CheckboxGroup, Radio, RadioGroup, Input, Textarea } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";

const perfiles = [
    { label: "Desarrollo de Software a la Medida", value: "custom_software_development" },
    { label: "Desarrollo de Software Empaquetado", value: "packaged_software_development" },
    { label: "Testing", value: "testing" },
    { label: "Aseguramiento de la Calidad", value: "quality_assurance" },
    { label: "Servicios de Soporte IT", value: "it_support_services" },
    { label: "Servicios de Consultoría de Negocios en TI", value: "it_business_consulting" },
    { label: "Outsourcing de Sistemas de Información", value: "information_systems_outsourcing" },
    { label: "Servicios de Migración y Calidad de Datos", value: "data_migration_and_quality" },
    { label: "Soporte y Mantenimiento de Software", value: "software_support_and_maintenance" },
    { label: "Seguridad Informática", value: "computer_security" },
    { label: "Desarrollo de Sistemas de Control Industrial", value: "industrial_control_systems_development" },
    { label: "Soluciones BI", value: "bi_solutions" },
    { label: "Comercio Electrónico", value: "e_commerce" },
    { label: "Capacitación y Entrenamiento", value: "training_and_education" },
    { label: "Servicios de Contenidos Digitales", value: "digital_content_services" },
    { label: "Incubación de base tecnológica", value: "tech_base_incubation" },
    { label: "Otra (especifique más adelante)", value: "other" }
];

const ciudades  = [
    { label: "Bogotá", value: "bogota" },
    { label: "Medellín", value: "medellin" },
    { label: "Cali", value: "cali" },
    { label: "Barranquilla", value: "barranquilla" },
    { label: "Manizales", value: "manizales" },
    { label: "Pereira", value: "pereira" },
    { label: "Cartagena", value: "cartagena" },
    { label: "Santa Marta", value: "santa_marta" },
    { label: "Ibagué", value: "ibague" },
    { label: "Bucaramanga", value: "bucaramanga" },
    { label: "Otra (especifique más adelante)", value: "other" }
];

const paises = [
    { label: "Venezuela", value: "venezuela" },
    { label: "Ecuador", value: "ecuador" },
    { label: "Perú", value: "peru" },
    { label: "Brasil", value: "brasil" },
    { label: "Chile", value: "chile" },
    { label: "Bolivia", value: "bolivia" },
    { label: "Argentina", value: "argentina" },
    { label: "Uruguay", value: "uruguay" },
    { label: "Paraguay", value: "paraguay" },
    { label: "Panamá", value: "panama" },
    { label: "México", value: "mexico" },
    { label: "Estados Unidos", value: "estados_unidos" },
    { label: "Otro (especifique más adelante)", value: "other" }
];




export default function FormNormPage() {
    const [selectedProfiles, setSelectedProfiles] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    const handleProfilesSelectionChange = (selectedProfiles: any) => {
        setSelectedProfiles(selectedProfiles);
    }
    const isOtherProfilesSelected = Array.from(selectedProfiles).includes("other");

    const handleCitiesSelectionChange = (selectedCities: any) => {
        setSelectedCities(selectedCities);
    }
    const isOtherCitiesSelected = Array.from(selectedCities).includes("other");

    const handleCountriesSelectionChange = (selectedCountries: any) => {
        setSelectedCountries(selectedCountries);
    }
    const isOtherCountriesSelected = Array.from(selectedCountries).includes("other");

    // Watchers
    React.useEffect(() => {
        const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
        if (!token) {
            redirectToLogin();
        }
    }, []);

    function redirectToLogin() {
        Router.push("/");
    }

    return (
        <DefaultLayout>
            <Head>
                <title>Intersoftware | Formularios</title>
            </Head>
            <SiteNavbar />

            <div className="light text-black" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "red", marginTop: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", color: "black", backgroundColor: "green", minWidth: "25vh" }}>
                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Input isRequired label="1. Nombre de la Empresa" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Input isRequired label="2. Nombre de quien completa la encuesta" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Input isRequired label="3. Cargo" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Input isRequired label="4. Correo electrónico" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{ backgroundColor: "blue", minWidth: "25vh" }}>

                        <RadioGroup
                            label="Select a city"
                            defaultValue="buenos-aires"
                            className="text-black"
                            required
                        >
                            <Radio value="buenos-aires">Buenos Aires</Radio>
                            <Radio value="sydney">Sydney</Radio>
                            <Radio value="san-francisco">San Francisco</Radio>
                            <Radio value="london">London</Radio>
                            <Radio value="tokyo">Tokyo</Radio>
                        </RadioGroup>
                    </div>

                    <div style={{ backgroundColor: "yellow", minWidth: "25vh" }}>
                        <CheckboxGroup
                            label="Select cities"
                            defaultValue={["buenos-aires", "london"]}
                        >
                            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                            <Checkbox value="sydney">Sydney</Checkbox>
                            <Checkbox value="san-francisco">San Francisco</Checkbox>
                            <Checkbox value="london">London</Checkbox>
                            <Checkbox value="tokyo">Tokyo</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Textarea
                            label="Description"
                            placeholder="Enter your description"
                        />
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Select
                            label="5. Perfil de la empresa"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedProfiles} // Here we use the state
                            onSelectionChange={handleProfilesSelectionChange} // Here we use the handler
                        >
                            {perfiles.map((perfil) => (
                                <SelectItem key={perfil.value} value={perfil.value}>
                                    {perfil.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherProfilesSelected && (

                            <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                                <Input
                                    clearable
                                    bordered
                                    label="5.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherProfilesSelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Select
                            label="6. Ciudades en las que tiene sede en Colombia"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            selectedKeys={selectedCities} // Here we use the state
                            onSelectionChange={handleCitiesSelectionChange} // Here we use the handler
                        >
                            {ciudades.map((city) => (
                                <SelectItem key={city.value} value={city.value}>
                                    {city.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherCitiesSelected && (

                            <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                                <Input
                                    clearable
                                    bordered
                                    label="6.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherCitiesSelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Select
                            label="7. Países en los que tiene personal contratado"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedCountries} // Here we use the state
                            onSelectionChange={handleCountriesSelectionChange} // Here we use the handler
                        >
                            {paises.map((pais) => (
                                <SelectItem key={pais.value} value={pais.value}>
                                    {pais.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherCountriesSelected && (

                            <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                                <Input
                                    clearable
                                    bordered
                                    label="7.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherCountriesSelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                        <Input isRequired label="8. Número total de empleados contratados" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{ backgroundColor: "purple", minWidth: "25vh", gridColumn: "span 2" }}>
                    </div>
                </div>
            </div>



        </DefaultLayout>
    );
}