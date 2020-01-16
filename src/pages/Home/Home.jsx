import React, { useState, useEffect, useContext } from 'react'
import {
    Tweet,
    Cabecalho,
    NavMenu,
    Dashboard,
    Widget,
    TrendsArea,
    Form
} from '../../components/index.js'

import { Contexto as NotificacaoContexto } from '../../components/Notificacao/Notificacao.jsx'

const listaInicialFake = [
    {
        id: 1,
        conteudo: 'Olar. Mussum Ipsum, cacilds vidis litro abertis.Detraxit consequat et quo num tendi nada.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
        nomeCompletoUsuario: 'Orlindo Aragão',
        nomeUsuario: 'orar',
        qtLikes: 2
    },
    {
        id: 2,
        conteudo: 'Turo bão? Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Casamentiss faiz malandris se pirulitá.',
        nomeCompletoUsuario: 'Jonas Brother',
        nomeUsuario: 'jobro',
        qtLikes: 4
    },
    {
        id: 3,
        conteudo: "Alô, alô, Terezinha! Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Leite de capivaris.",
        nomeCompletoUsuario: 'Antonio Carlos',
        nomeUsuario: 'mussum',
        qtLikes: 66
    }
]
/*
    const listaTweets = [
        <Tweet { ...infoTweet1 } key = "1">
            {infoTweet1.conteudo}
        </Tweet>,
        <Tweet
            nomeCompletoUsuario={infoTweet2.nomeCompletoUsuario}
            nomeUsuario={infoTweet2.nomeUsuario}
            qtLikes={infoTweet2.qtLikes}
            key='2'
        >
            {infoTweet2.conteudo}
        </Tweet>,
        React.createElement(
            Tweet,
            {...infoTweet3, key: 3},
            [
                "Alô, alô, Terezinha! Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Leite de capivaris."
            ]
        )
    ]
*/


export function Home () {

    // Hook setState
    const [listaTweets, setListaTweets] = useState(listaInicialFake)

    const { setMsg } = useContext(NotificacaoContexto)

    /*
    useEffect(() => {
        TweetService.carrega()
            .then(listaServidor => {
                setListaTweets([...listaServidor, ...listaTweets])
            })
    }, [])
    */

    useEffect(() => {
        setTimeout(() => {
            setMsg('')
        }, 5000)
    })

    function adicionaTweet(novoTweet){
        setListaTweets( [ novoTweet, ...listaTweets ] )
    }

    return (

        <div>
            <Cabecalho>
                <NavMenu> </NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <Form adicionaTweet={ adicionaTweet } />
                    </Widget>
                    <Widget>
                        <TrendsArea></TrendsArea>
                    </Widget>
                </Dashboard>

                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            {listaTweets.map(infoTweet =>
                                <Tweet {...infoTweet} key={infoTweet.id}>
                                    {infoTweet.conteudo}
                                </Tweet>
                            )}
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </div>
    )
}