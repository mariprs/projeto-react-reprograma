import styles from '../styles/components/portfolio.module.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
        
export function Portfolio () {
            const baseURL = 'https://api.github.com/users/mariprs/repos'
            const [reposFromAPI, setReposFromApi] = useState([])
            const [searchedWord, setSearchedWord] = useState('')
            const [filteredRepos, setFilteredRepos] = useState([])
            
            useEffect(() => {
                async function getData() {
                    const response = await Axios.get(baseURL)
                    setReposFromApi(response.data)
                }
                getData()
            }, [])
            
            function handleSearch(event) {
                setSearchedWord(event.target.value)
            }
            
            useEffect(() => {
                const filtered = reposFromAPI.filter(reposFromAPI => {
                    return reposFromAPI.name.includes(searchedWord)
                })
                setFilteredRepos(filtered)}, [reposFromAPI, searchedWord])
                
                return(
                    <div className={styles.biggerRow}>
                    <input className={styles.input} placeholder="Digite para filtrar repos" onChange={handleSearch} />
                    {filteredRepos.map (reposFromAPI => {
                        return(
                            <a href={reposFromAPI.url} className={styles.linkApi}>
                            <div className={styles.row}>
                                <h1 key={reposFromAPI.name} className={styles.columnTitle}>{reposFromAPI.name}</h1>
                                <h2 key={reposFromAPI.description} className={styles.columnSubtitle}>{reposFromAPI.description}</h2>
                                <p>Clique no card para acessar</p>
                            </div></a>
                        )
                    })}
                    </div>
                )
            }

            export default Portfolio