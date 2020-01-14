import React from 'react'
import { Tweet } from '../../components/Tweet/Tweet.jsx'

export function Home () {

    const infoTweet1 = {
        conteudo: 'Olar. Mussum Ipsum, cacilds vidis litro abertis.Detraxit consequat et quo num tendi nada.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
        nomeCompletoUsuario: 'Orlindo Aragão',
        nomeUsuario: 'orar',
        qtLikes: 2
    }
    const infoTweet2 = {
        conteudo: 'Turo bão? Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Casamentiss faiz malandris se pirulitá.',
        nomeCompletoUsuario: 'Jonas Brother',
        nomeUsuario: 'jobro',
        qtLikes: 4
    }
    const infoTweet3 = {
        conteudo: "Alô, alô, Terezinha! Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Leite de capivaris.",
        nomeCompletoUsuario: 'Antonio Carlos',
        nomeUsuario: 'mussum',
        qtLikes: 66
    }

    const listaTweet = [
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


    return (
        <div>
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                    <nav className="navMenu">
                        <ul className="navMenu__lista">
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/">
                                    Bem vindo(a): <br />
                                    <strong> @alumna</strong>
                                </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/">
                                    Página Inicial
                        </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/hashtags">
                                    Hashtags
                        </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/logout">
                                    Logout
                        </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="container">

                <div className="dashboard">
                    <div className="widget">

                        <form className="novoTweet">
                            <div className="novoTweet__editorArea">
                                <span className="novoTweet__status">0/140</span>
                                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                            </div>
                            <button type="submit" className="novoTweet__envia">Tweetar</button>
                        </form>

                    </div>
                    <div className="widget">
                        <div className="trendsArea">
                            <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                            <ol className="trendsArea__lista">
                                <li><a href="/">#react</a></li>
                                <li><a href="/">#reactHooks</a></li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="dashboard dashboard__centro">
                    <div className="widget">
                        <div className="tweetsArea">

                            { listaTweet }

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}