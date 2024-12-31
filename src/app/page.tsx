import Image from "next/image";

import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { DateField } from "@/components/date-field";
import { FileUploadField } from "@/components/file-upload-field";
import { FormControl } from "@/components/form-control";
import { SelectionCard } from "@/components/selection-card";
import { SelectionField } from "@/components/selection-field";

import Illustration from "../../public/illustration.png";
import Stars from "../../public/stars.png";

export default function Page() {
    return (
        <div className="flex md:grid grid-cols-2 w-full">
            <div className="flex flex-col p-[64px] gap-[48px]">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="font-semibold text-2xl">Formulário de matrícula</h1>
                    <p className="font-regular text-[16px]">Preencha os dados abaixo para matricular seu filho na escola de educação infantil Estrelas do Amanhã.</p>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <h3 className="font-semibold text-[16px]">Informações da criança</h3>
                    <div className="">
                        <FormControl
                            label="Nome completo"
                            placeholder="Digite o nome completo da criança"
                        />
                    </div>
                    <div className="">
                        <DateField
                            label="Data de nascimento"
                            placeholder="DD/MM/AAAA"
                        />
                    </div>
                    <div className="">
                        <SelectionField label="Sexo">
                            <option value="">Selecione o sexo</option>
                            <option value="F">Feminino</option>
                            <option value="M">Masculino</option>
                        </SelectionField>
                    </div>
                    <div className="">
                        <FileUploadField
                            label="Certidão de nascimento"
                            accept=".pdf,.jpg,.jpeg,.png"
                            helperText="Formatos aceitos: PDF, JPG, JPEG ou PNG"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <h3 className="font-semibold text-[16px]">Endereço residencial</h3>
                    <div className="">
                        <FormControl
                            label="CEP"
                            placeholder="00000-000"
                        />
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col md:grid grid-cols-3 gap-[20px]">
                            <div className="flex flex-col col-span-2">
                                <FormControl
                                    label="Rua"
                                    placeholder="Digite o nome da rua"
                                />
                            </div>
                            <div className="flex flex-col col-span-1">
                                <FormControl
                                    label="Número"
                                    placeholder="Nº"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:grid grid-cols-3 gap-[20px]">
                            <div className="flex flex-col col-span-2">
                                <FormControl
                                    label="Cidade"
                                    placeholder="Digite a cidade"
                                />
                            </div>
                            <div className="flex flex-col col-span-1">
                                <SelectionField label="Estado">
                                    <option value="">UF</option>
                                    <option value="SP">SP</option>
                                    <option value="RJ">RJ</option>
                                    {/* Add other states */}
                                </SelectionField>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <h3 className="font-semibold text-[16px]">Informações do responsável</h3>
                    <div className="">
                        <FormControl
                            label="Nome do responsável"
                            placeholder="Digite o nome completo do responsável"
                            helperText="Principal responsável legal e contato de emergência"
                        />
                    </div>
                    <div className="">
                        <FormControl
                            label="Telefone"
                            placeholder="(00) 00000-0000"
                            type="tel"
                        />
                    </div>
                    <div className="">
                        <FormControl
                            label="E-mail"
                            placeholder="exemplo@email.com"
                            type="email"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <h3 className="font-semibold text-[16px]">Opções de matrícula</h3>
                    <div className="">
                        <p className="text-sm text-text-200 mb-2">Selecione o turno de estudo</p>
                        <div className="flex md:flex-row flex-col gap-4">
                            <SelectionCard label="Manhã" name="turno" value="manha" />
                            <SelectionCard label="Tarde" name="turno" value="tarde" />
                        </div>
                    </div>
                    <div className="">
                        <p className="text-sm text-text-200">Em que esporte você gostaria de inscrever seu filho?</p>
                        <div className="flex flex-col md:grid grid-cols-2 gap-4 mt-2">
                            <SelectionCard label="Natação" name="esporte" value="natacao" />
                            <SelectionCard label="Ballet" name="esporte" value="ballet" />
                            <SelectionCard label="Judô" name="esporte" value="judo" />
                            <SelectionCard label="Futebol" name="esporte" value="futebol" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-text-200">
                        Declaro que li e concordo com os Termos e Condições e com a Política de Privacidade da escola Estrela do Amanhã.
                    </label>
                </div>
                <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:justify-end md:items-end">
                    <Button variant="secondary">Salvar respostas</Button>
                    <Button>Fazer matrícula</Button>
                </div>
            </div>
            <div className="min-h-screen bg-[#FEE7D6] p-8 md:p-16 flex flex-col gap-8 md:gap-[32px]">
                <div className="flex flex-col gap-4 md:gap-2">
                    <div className="flex items-center gap-2 md:gap-[6px]">
                        <Image
                            alt="Logotipo Estrelas do Amanhã"
                            className="w-8 h-8"
                            src={Stars}
                            width={32}
                            height={32}
                        />
                        <h2 className="text-lg md:text-[20px] font-medium">Estrelas do Amanhã</h2>
                    </div>
                    <h1 className="font-semibold text-3xl md:text-[40px] leading-tight">Porque cada momento de aprendizado conta</h1>
                    <p className="text-base md:text-[16px] text-text-200">Inscreva seu filho em nossa escola e veja-o florescer em um ambiente acolhedor, seguro e estimulante.</p>
                </div>
                <div className="flex justify-center">
                    <Image
                        alt="Ilustração de crianças estudando"
                        src={Illustration}
                        className="w-full max-w-[600px] h-auto"
                        width={600}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}