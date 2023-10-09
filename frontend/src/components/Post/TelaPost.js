import { SelectAssunto, LabelAssunto, DivSelector, BotaoPost, ContainerPost, Label, TituloPost, Texto } from "./StyledPost";

function TelaPost(){
    return(
        <>
            <ContainerPost>
                <Label>Título</Label>
                <TituloPost type="text"></TituloPost>
                <DivSelector>
                    <LabelAssunto for="Assunto">Assunto</LabelAssunto>
                        <SelectAssunto name="Assunto Select">
                        <option value="Abuso moral">Abuso moral</option>
                        <option value="Abuso físico">Abuso físico</option>
                        <option value="Abuso mental">Abuso mental</option>
                        <option value="Homofobia">Homofobia</option>
                        <option value="Racismo">Racismo</option>
                        <option value="Xenofobia">Xenofobia</option>
                    </SelectAssunto>
                </DivSelector>
                <Texto maxlenght="256"></Texto>
                <BotaoPost>Postar</BotaoPost>
            </ContainerPost>
        </>
    )
}

export default TelaPost