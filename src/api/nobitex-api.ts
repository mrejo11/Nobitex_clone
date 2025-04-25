
export default async function getData() {
    try {
        const res = fetch(
            "https://api.nobitex.ir/market/stats?srcCurrency=btc,eth,usdt,doge,shib,trx&dstCurrency=rls",{
                cache:'force-cache',next:{revalidate:60}
            }
        );
        const data = (await res).json();
        return data;
    } catch (error) {
        console.log(error);
    }
}