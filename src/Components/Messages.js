import React from 'react'
import './Messages.css'

const Messages = () => {
    let messages = [{ author: 'Peter', content: 'Hey How are you?' }, { author: 'Sandra', content: 'Hey Miss me yet?' }]
    //obvs this would come from the API


    const myMessages = messages.map((message) => {
        return (
            <>
                <h3>{message.author}</h3>
                <h4>{message.content}</h4>
            </>)
    })

    console.log(myMessages)

    return (<section>
        {myMessages}
    </section>
    )
}

export default Messages