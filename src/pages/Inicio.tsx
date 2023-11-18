import Menu from "../components/Menu";
import { BotaoCadastro, Fundo } from "../styles/Inicio";

export default function Inicio() {
    return (
        <Fundo>
            <Menu />

            <span> Lista de aniversario inicio </span>
            <h3>cadastro de quem vai dar o presente</h3>
            <BotaoCadastro> Cadastrar </BotaoCadastro>


        </Fundo>
    )
}
