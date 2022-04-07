import {useImage} from "./useImage"

export const Image = ({fileName}) => {
    const {loading, error, image} = useImage(fileName)

    if (error) return (<p>error loading image</p>)

    return (
        <>
            {loading ? 
            (<h4>loading...</h4>) 
            :
            (<img src={image}/>)
            }
        </>
    )
    
}

