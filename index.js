var users = new Array();

function usuario(id, nome, sobrenome, email, senha) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.senha = senha;
}


function validar()
{
    try
    {
    var id = document.getElementById("inputID");
    var priNome = document.getElementById("inputPriNome");
    var ultiNome = document.getElementById("inputUltiNome");
    var email = document.getElementById("inputEmail");
    var senha = document.getElementById("inputSenha");
    var mErro = document.getElementById("erro");

    mErro.innerHTML = "";

    if(id.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Id é um campo obrigatório</p>";
        return false;
    }
    if(priNome.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Primeiro nome é um campo obrigatório</p>";
        return false;
    }
    if(ultiNome.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Último nome é um campo obrigatório</p>";
        return false;
    }
    if(email.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Email é um campo obrigatório</p>";
        return false;
    }
    if(senha.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Senha é um campo obrigatório</p>";
        return false;
    }

    var usu = new usuario(id.value, priNome.value, ultiNome.value, email.value, senha.value);

    users.push(usu);


    alert("Cadastro Realizado com Sucesso!!!");
    // Store

    var login = document.getElementById("dvLogin");
    var cadLogin = document.getElementById("dvCadLogin");
    var logado = document.getElementById("dvLogado");

    login.style.visibility = "visible";
    cadLogin.style.visibility = "hidden";
    logado.style.visibility = "hidden";
}
catch (e)
{
    alert(e);
}
    
   
}


function loginA()
{
    var senha = document.getElementById("senha");
    var usu = document.getElementById("usu");

    var flag = 0;

    for(i=0; i<users.length; i++)
    {
        if(users[i].nome === usu.value && users[i].senha == senha.value)
        {
            flag = 1;
            var login = document.getElementById("dvLogin");
            var cadLogin = document.getElementById("dvCadLogin");
            var logado = document.getElementById("dvLogado");

            login.style.visibility = "hidden";
            cadLogin.style.visibility = "hidden";
            logado.style.visibility = "visible";
        }
    }

    if(flag == 0)
    {
        alert("Usuário ou Senha Inválido(s)");
    }
}

function chamaCad()
{
    var login = document.getElementById("dvLogin");
    var cadLogin = document.getElementById("dvCadLogin");
    var logado = document.getElementById("dvLogado");

    login.style.visibility = "hidden";
    cadLogin.style.visibility = "visible";
    logado.style.visibility = "hidden";
}

function jaLogin()
{
    var login = document.getElementById("dvLogin");
    var cadLogin = document.getElementById("dvCadLogin");
    var logado = document.getElementById("dvLogado");

    login.style.visibility = "visible";
    cadLogin.style.visibility = "hidden";
    logado.style.visibility = "hidden";
}

function deslog()
{
    var login = document.getElementById("dvLogin");
    var cadLogin = document.getElementById("dvCadLogin");
    var logado = document.getElementById("dvLogado");

    login.style.visibility = "visible";
    cadLogin.style.visibility = "hidden";
    logado.style.visibility = "hidden";
}

