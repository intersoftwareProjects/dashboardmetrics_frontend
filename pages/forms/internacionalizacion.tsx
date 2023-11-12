import * as React from "react";
import {useState} from "react";
import Router from "next/router";
import {SiteNavbar} from "@/components/common/site_navbar";
import Head from "next/head";
import {
    BreadcrumbItem,
    Breadcrumbs,
    Button,
    Input,
    Radio,
    RadioGroup,
    Select,
    SelectItem,
    Textarea
} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import {title} from "@/components/primitives";


const servicesOffered = [
    {label: "Consultoría en estrategia de tecnología y transformación digital.", value: "tech_strategy_consulting"},
    {label: "Desarrollo de software personalizado. (Incluyendo diseño y desarrollo de aplicaciones para dispositivos móviles)", value: "custom_software_development"},
    {label: "Implementación de soluciones ERP y CRM.", value: "erp_crm_solutions"},
    {label: "Servicios de ciberseguridad", value: "cybersecurity_services"},
    {label: "Análisis de datos y BI", value: "data_analysis_bi"},
    {label: "Automatización de procesos empresariales con software", value: "business_process_automation"},
    {label: "Servicios de gestión de proyectos", value: "project_management_services"},
    {label: "Desarrollo de soluciones de IA.", value: "ai_solution_development"},
    {label: "Servicio de automatización de pruebas", value: "testing_automation_service"},
    {label: "N/A", value: "not_applicable"}
];

const businessStrategies = [
    {label: "Distribuidor", value: "distributor"},
    {label: "Alianzas estratégicas o Joint Venture", value: "strategic_alliances_joint_venture"},
    {label: "Franquicia", value: "franchise"},
    {label: "Subcontratación", value: "subcontracting"}
];


export default function FormInternacionalizacion() {

    const [selectedServicesOffered, setSelectedServicesOffered] = useState([]);
    const [selectedBusinessStrategies, setSelectedBusinessStrategies] = useState([]);

    const handleServicesOfferedSelectionChange = (selectedServicesOffered: any) => {
        setSelectedServicesOffered(selectedServicesOffered);
    }

    const handleBusinessStrategiesSelectionChange = (selectedBusinessStrategies: any) => {
        setSelectedBusinessStrategies(selectedBusinessStrategies);
    }
    // @ts-ignore
    const isOtherBusinessStrategiesSelected = Array.from(selectedBusinessStrategies).includes("other");



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
            <SiteNavbar/>

            <div className="light text-black" style={{padding: "20px"}}>
                <Breadcrumbs>
                    <BreadcrumbItem href="/forms">Formularios</BreadcrumbItem>
                    <BreadcrumbItem href="/forms/internacionalizacion">Encuesta Internacionalización</BreadcrumbItem>
                </Breadcrumbs>
            </div>

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

                    <h1 style={{gridColumn: "span 2"}} className={`${title({size: "sm"})} text-center`}>
                        Encuesta de Internacionalización
                    </h1>
                    <p className="text-black" style={{gridColumn: "span 2", marginBottom: "20px"}}>
                        Seguimos trabajando en diseñar las mejores estrategias para las empresas ISW y consolidarnos
                        como un actor clave del ecosistema. Por eso, para Intersoftware es importante conocer su
                        proyección internacional.
                    </p>

                    {/* PREGUNTA 1 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired labelPlacement="outside" label="1. Nombre de la empresa"
                               placeholder="Escriba su respuesta"/>
                    </div>

                    {/* PREGUNTA 2*/}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired labelPlacement="outside"
                               label="2. Nombre de la persona que diligencia la encuesta"
                               placeholder="Escriba su respuesta"/>
                    </div>

                    {/* PREGUNTA 3 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired labelPlacement="outside" label="3. Cargo" placeholder="Escriba su respuesta"/>
                    </div>

                    {/* PREGUNTA 4 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Input isRequired labelPlacement="outside" label="4. Correo electrónico"
                               placeholder="Escriba su respuesta"/>
                    </div>

                    {/* PREGUNTA 5 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <RadioGroup
                            label="5. ¿Tiene su empresa una estrategia de internacionalización clara?"
                            className="text-black"
                        >
                            <Radio value="yes">Si</Radio>
                            <Radio value="No">No</Radio>
                        </RadioGroup>
                    </div>

                    {/* PREGUNTA 6 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <RadioGroup
                            label="6. ¿Exporta actualmente?"
                            className="text-black"
                        >
                            <Radio value="yes">Si</Radio>
                            <Radio value="No">No</Radio>
                        </RadioGroup>
                    </div>

                    {/* PREGUNTA 7 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="7. Si su respuesta anterior fue SI, el año anterior ¿Cuál fue el monto total de sus exportaciones (monto en Dólares)?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 8 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="8. ¿En cuáles países presta actualmente servicios su empresa?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 9 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="9. ¿En cuáles países tiene como objetivo prestar sus servicios?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 10 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="10. ¿Cuáles son los sectores que principalmente atiende?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 11 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="11. ¿Cuáles son los sectores que siente tiene capacidad de atender?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 12 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="12. ¿Cuáles son los principales desafíos que cree tiene en el proceso de internacionalización?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 13 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Select
                            label="13. Seleccione entre el siguiente listado de servicios, cuales ofrece su empresa en el exterior:"
                            placeholder="Selecciona una o mas de una"
                            labelPlacement="outside"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedServicesOffered} // Here we use the state
                            onSelectionChange={handleServicesOfferedSelectionChange} // Here we use the handler
                        >
                            {servicesOffered.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>

                    {/* PREGUNTA 14 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2", marginTop: "20px"}}>
                        <Select
                            label="14. Siguiendo con la pregunta anterior; Seleccione entre el siguiente listado de servicios, que tendría capacidad de ofrecer que aún no lo hace."
                            placeholder="Selecciona una o mas de una"
                            labelPlacement="outside"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedServicesOffered} // Here we use the state
                            onSelectionChange={handleServicesOfferedSelectionChange} // Here we use the handler
                        >
                            {servicesOffered.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>

                    {/* PREGUNTA 15 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                        <Textarea
                            label="15. ¿La empresa ha adaptado sus productos y servicios para satisfacer las necesidades de los clientes en los mercados internacionales que desea abordar?"
                            placeholder="Escriba su respuesta"
                            labelPlacement={"outside"}
                            isRequired={true}
                        />
                    </div>

                    {/* PREGUNTA 16 */}
                    <div style={{minWidth: "25vh", gridColumn: "span 2", marginTop: "20px"}}>
                        <Select
                            label="16. Entre los siguientes tipos de acuerdos comerciales o alianzas estratégicas con socios locales en el mercado internacional. ¿Cuáles estaría dispuesto a explorar?"
                            placeholder="Selecciona una o mas de una"
                            labelPlacement="outside"
                            selectionMode="multiple"
                            required
                            selectedKeys={selectedBusinessStrategies} // Here we use the state
                            onSelectionChange={handleBusinessStrategiesSelectionChange} // Here we use the handler
                        >
                            {businessStrategies.map((e) => (
                                <SelectItem key={e.value} value={e.value}>
                                    {e.label}
                                </SelectItem>
                            ))}
                        </Select>

                        {isOtherBusinessStrategiesSelected && (

                            <div style={{minWidth: "25vh", gridColumn: "span 2"}}>
                                <Input
                                    label="16.1 Otro"
                                    placeholder="Especifique aquí"
                                    disabled={!isOtherBusinessStrategiesSelected}
                                />
                            </div>
                        )}
                    </div>


                </div>

                {/* BOTON ENVIAR */}
                <div style={{display: "flex", justifyContent: "center", padding: "40px"}}>
                    <Button color="primary" variant="shadow">
                        Enviar Formulario
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
}