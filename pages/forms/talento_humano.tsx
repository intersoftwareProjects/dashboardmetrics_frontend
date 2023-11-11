import * as React from "react";
import {useState} from "react";
import Router from "next/router";
import {SiteNavbar} from "@/components/common/site_navbar";
import Head from "next/head";
import {Button, Input, Radio, RadioGroup, Select, SelectItem} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

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

const ciudades = [
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

const workModalities = [
    {label: "Teletrabajo", value: "teletrabajo"},
    {label: "Trabajo remoto", value: "trabajo_remoto"},
    {label: "Trabajo hibrido", value: "trabajo_hibrido"},
    {label: "Presencial", value: "presencial"},
    {label: "Otro (especifique más adelante)", value: "other"}
];

const productivities = [
    {label: "Si", value: "si"},
    {label: "No", value: "no"},
    {label: "Aun no lo mido", value: "no_mido"},
    {label: "Otro (especifique más adelante)", value: "other"}
]

const bonusTypes = [
    {label: "Bono por resultados", value: "bonus_by_results"},
    {label: "Bono por proyecto", value: "bonus_by_project"},
    {label: "Bono por tiempo de vinculación a la empresa", value: "bonus_by_company_tenure"},
    {label: "Bono por ventas", value: "bonus_by_sales"},
    {label: "Bono por producción", value: "bonus_by_production"},
    {label: "Bono por cumplimiento de presupuesto", value: "bonus_by_budget_compliance"},
    {label: "N/A", value: "not_applicable"},
    {label: "Otro (especifique más adelante)", value: "other"}
];

const employeeBenefits = [
    {label: "Home Office", value: "home_office"},
    {label: "Días libres en fechas especiales", value: "special_dates_free_days"},
    {label: "Plan carrera", value: "career_plan"},
    {label: "Horarios flexibles", value: "flexible_hours"},
    {label: "Auxilio de estudio", value: "study_aid"},
    {label: "Medicina prepagada - pólizas de salud", value: "prepaid_medicine_health_policies"},
    {label: "Alianzas con entidades financieras", value: "partnerships_with_financial_entities"},
    {label: "Días de vacaciones adicionales a los legales", value: "additional_legal_vacation_days"},
    {label: "Adelanto de nomina", value: "payroll_advance"},
    {label: "Alimentación", value: "food"},
    {label: "Plan de celular corporativo", value: "corporate_cell_plan"},
    {label: "Bonos compras en comercios", value: "shopping_vouchers"},
    {label: "Plan de bienestar integral", value: "comprehensive_wellness_plan"},
    {label: "Plataformas de entretenimiento", value: "entertainment_platforms"},
    {label: "Prima extralegal", value: "extra_legal_bonus"},
    {label: "Otro (especifique más adelante)", value: "other"}
];

const departureReasons = [
    {label: "Mejor cargo o salario en otra empresa", value: "better_position_or_salary"},
    {label: "Problemas personales del colaborador", value: "employee_personal_issues"},
    {label: "Sobre carga laboral", value: "work_overload"},
    {label: "Ausencia de liderazgo", value: "lack_of_leadership"},
    {label: "Falta de reconocimiento profesional", value: "lack_of_professional_recognition"},
    {label: "Clima laboral", value: "work_environment"},
    {label: "Otro (especifique más adelante)", value: "other"}
];



export default function FormNormPage() {
    const [selectedProfiles, setSelectedProfiles] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedWorkModalities, setSelectedWorkModalities] = useState([]);
    const [selectedProductivity, setSelectedProductivity] = useState([]);
    const [selectedBonusTypes, setSelectedBonusTypes] = useState([]);
    const [selectedEmployeeBenefits, setSelectedEmployeeBenefits] = useState([]);
    const [selectedDepartureReasons, setSelectedDepartureReasons] = useState([]);


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

    const handleWorkModalitiesSelectionChange = (selectedWorkModalities: any) => {
        setSelectedWorkModalities(selectedWorkModalities);
    }
    const isOtherWorkModalitiesSelected = Array.from(selectedWorkModalities).includes("other");

    const handleProductivitySelectionChange = (selectedProductivity: any) => {
        setSelectedProductivity(selectedProductivity);
        console.log(selectedProductivity)
    }
    const isOtherProductivitySelected = Array.from(selectedProductivity).includes("other");

    const handleBonusTypesSelectionChange = (selectedBonusTypes: any) => {
        setSelectedBonusTypes(selectedBonusTypes);
    }
    const isOtherBonusTypesSelected = Array.from(selectedBonusTypes).includes("other");

    const handleEmployeeBenefitsSelectionChange = (selectedEmployeeBenefits: any) => {
        setSelectedEmployeeBenefits(selectedEmployeeBenefits);
    }
    const isOtherEmployeeBenefitsSelected = Array.from(selectedEmployeeBenefits).includes("other");

    const handleDepartureReasonsSelectionChange = (selectedDepartureReasons: any) => {
        setSelectedDepartureReasons(selectedDepartureReasons);
    }
    const isOtherDepartureReasonsSelected = Array.from(selectedDepartureReasons).includes("other");

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

            <div className="light text-black" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    color: "black",
                    minWidth: "30vh",
                    maxWidth: "80vh"
                }}>
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired label="1. Nombre de la Empresa" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired label="2. Nombre de quien completa la encuesta" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired label="3. Cargo" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
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

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
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

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
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

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
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

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
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

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
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

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired label="8. Número total de empleados contratados" placeholder="Escriba su respuesta" />
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>

                        <p>
                            9. Número de empleados contratados por tipo de contrato
                        </p>
                        <br></br>
                        <div>
                            {/* Headers */}
                            <div style={{display: 'flex', marginBottom: '10px', color: 'black'}}>
                                <div style={{flex: 6, textAlign: 'left', paddingLeft: '15px', fontWeight: 'bold'}}>Tipo
                                    de contrato
                                </div>
                                {['0-25%', '26-50%', '51-75%', '76-100%'].map((percent) => (
                                    <div key={percent} style={{
                                        textAlign: 'left',
                                        fontWeight: 'bold',
                                        marginRight: "55px",
                                        paddingInline: "5px"
                                    }}>{percent}</div>
                                ))}
                            </div>

                            {/* Separator */}
                            <hr style={{border: '1px solid #000000', margin: '10px 0'}}/>

                            {/* Rows with RadioGroups aligned to headers */}
                            {['Indefinido', 'Definido', 'Prestación de servicios', 'Obra labor', 'Otro'].map((contract, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    marginBottom: '10px',
                                    alignItems: 'center',
                                    color: 'black'
                                }}>
                                    <div style={{flex: 1, textAlign: 'left', paddingLeft: '15px'}}>{contract}</div>
                                    <div style={{flex: 3, display: 'flex', justifyContent: 'space-around'}}>
                                        <RadioGroup
                                            orientation="horizontal"
                                            defaultValue="0-25%"
                                            // State and event handlers should be managed here
                                        >
                                            {['0-25%', '26-50%', '51-75%', '76-100%'].map((value) => (
                                                <Radio key={value} value={value} css={{margin: 1}}>
                                                    {value}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Select
                            label="10. Que tipo de modalidad de trabajo aplica actualmente"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedWorkModalities} // Here we use the state
                            onSelectionChange={handleWorkModalitiesSelectionChange} // Here we use the handler
                        >
                            {workModalities.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherWorkModalitiesSelected && (

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                                <Input
                                    clearable
                                    bordered
                                    label="10.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherWorkModalitiesSelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Select
                            label="11. El trabajo remoto a aumentado la productividad de sus colaboradores"
                            placeholder="Selecciona una"
                            selectionMode="single"
                            required
                            selectedKeys={selectedProductivity} // Here we use the state
                            onSelectionChange={handleProductivitySelectionChange} // Here we use the handler
                        >
                            {productivities.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherProductivitySelected && (

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                                <Input
                                    clearable
                                    bordered
                                    label="11.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherProductivitySelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{minWidth: "25vh"}}>

                        <RadioGroup
                            label="12. ¿Cuál es el impacto percibido del trabajo remoto en el aumento de la productividad de la empresa?"
                            className="text-black"
                            required
                        >
                            <Radio value="0_percent">0%</Radio>
                            <Radio value="1_to_5_percent">Entre el 1 y el 5%</Radio>
                            <Radio value="6_to_10_percent">Entre el 6 y el 10%</Radio>
                            <Radio value="11_to_15_percent">Entre el 11 y el 15%</Radio>
                            <Radio value="16_to_20_percent">Entre el 16 y el 20%</Radio>
                            <Radio value="more_than_20_percent">Más del 20%</Radio>
                        </RadioGroup>
                    </div>

                    <div style={{minWidth: "25vh"}}>

                        <RadioGroup
                            label="13. Su empresa cuenta con paquetes de compensación variable (pago vinculado al desempeño de un colaborador que no hace parte del salario fijo)"
                            className="text-black"
                            required
                        >
                            <Radio value="yes">Si</Radio>
                            <Radio value="No">No</Radio>
                        </RadioGroup>
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Select
                            label="14. Si su respuesta anterior es SI, ¿cuál de estos tipos de compensación variable utiliza con sus colaboradores?"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedBonusTypes} // Here we use the state
                            onSelectionChange={handleBonusTypesSelectionChange} // Here we use the handler
                        >
                            {bonusTypes.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherBonusTypesSelected && (

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                                <Input
                                    clearable
                                    bordered
                                    label="14.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherBonusTypesSelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Select
                            label="15. ¿Cuales de estos beneficios tiene su empresa para retener talento?"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedEmployeeBenefits} // Here we use the state
                            onSelectionChange={handleEmployeeBenefitsSelectionChange} // Here we use the handler
                        >
                            {employeeBenefits.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherEmployeeBenefitsSelected && (

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                                <Input
                                    clearable
                                    bordered
                                    label="14.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherEmployeeBenefitsSelected}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2", marginTop: "20px"}}>
                        <Input isRequired labelPlacement="outside"
                               label="16. Índice de rotación general de la empresa primer semestre 2023 (Índice de rotación anual % = [ Cantidad de empleados que se fueron / (Cantidad inicial de empleados + Cantidad final de empleados) /2 ] X 100)"
                               placeholder="Escriba su respuesta"/>
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2", marginTop: "20px"}}>
                        <Input isRequired labelPlacement="outside"
                               label="17. Índice de rotación personal TI (Índice de rotación anual % = [ Cantidad de empleados que se fueron / (Cantidad inicial de empleados + Cantidad final de empleados) /2 ] X 100)"
                               placeholder="Escriba su respuesta"/>
                    </div>

                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Select
                            label="18. Principales razones de la rotación del personal en el primer semestre del 2023"
                            placeholder="Selecciona una o mas de una"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedDepartureReasons} // Here we use the state
                            onSelectionChange={handleDepartureReasonsSelectionChange} // Here we use the handler
                        >
                            {departureReasons.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherDepartureReasonsSelected && (

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                                <Input
                                    clearable
                                    bordered
                                    label="18.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherDepartureReasonsSelected}
                                />
                            </div>
                        )}
                    </div>

                </div>
                <div style={{display: "flex", justifyContent: "center", padding: "40px"}}>
                    <Button color="primary" variant="shadow">
                        Enviar Formulario
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
}