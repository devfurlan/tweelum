import React, { useState } from 'react'

import './novoTweet.css'

export function Form(props){

    const { adicionaTweet } = props

    // Hook setState
    const [textoTweetNovo, setTextoTweetNovo] = useState("")
    
    // Enviar Tweet
    function onSubmitTweet(e) {
        e.preventDefault()
        const novoTweet = {
            id: 2,
            conteudo: textoTweetNovo,
            nomeCompletoUsuario: 'Jonas Brother',
            nomeUsuario: 'jobro',
            qtLikes: 4
        }
        adicionaTweet(novoTweet)
    }
    
    function onChangeTextarea(e) {
        const novoTamanho = e.target.value
        setTextoTweetNovo(novoTamanho)
    }

    // Validação quantidade de caracter
    const EhInvalido = textoTweetNovo.length > 140
    const classeStatusTweet = EhInvalido ? 'novoTweet__status novoTweet__status--invalido' : 'novoTweet__status'

    return (
        <form onSubmit={onSubmitTweet} className="novoTweet">
            <div className="novoTweet__editorArea">
                <span className={classeStatusTweet}>{textoTweetNovo.length}/140</span>
                <textarea onChange={onChangeTextarea} className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
            </div>
            <button disabled={EhInvalido} type="submit" className="novoTweet__envia">Tweetar</button>
        </form>
    )

}

