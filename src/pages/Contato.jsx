import { useState } from 'react'
import { Medias } from '../components/Medias'
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'
import styles from '../styles/components/contato.module.css'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()
    const messageListRef = ref(database, 'mensagens') // criei minha coleção
    const newMessageRef = push(messageListRef) // nova mensagem vai para coleção mensagens
    set(newMessageRef, {
        nome: nome,
        email: email,
        texto: mensagem
    })
}

  return(
    <>
    <Medias />
      <div>
        <form className={styles.form} onSubmit={handleCreateMessage}>
          <input 
            className={styles.formInput} 
            placeholder="Digite seu nome" 
            onChange={handleInputValueNome}
          />
          <input 
            className={styles.formInput} 
            placeholder="Digite seu email"
            onChange={handleInputValueEmail}
          />
          <textarea 
            className={styles.formTextArea} 
            placeholder="Digite sua mensagem"
            onChange={handleInputValueMensagem}
          />
          <button type="submit" className={styles.buttonTop}>
            <span></span>
            <span></span>
            <span></span>
            <span></span> Enviar</button></form>
      </div>
    </>
  )
}
