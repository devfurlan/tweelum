
export function Tweet(conteudo) {
    return React.createElement('article', { className: 'tweet' }, [
        React.createElement('p', { className: 'tweet_conteudo' }, [
            conteudo,
            console.log(conteudo)
        ])
    ])
}