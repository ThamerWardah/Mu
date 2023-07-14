import UserMonth from '../actions/getUser'

export default async function Home(){
    const allData = await UserMonth();
    return(
        <div>{JSON.stringify(allData)}</div>
    )
}