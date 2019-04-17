export class Api {
    static async getQuote(symbol: String): Promise<number> {
        return await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`)
            .then(res => res.json())
            .then(res => {
                if (!res["Global Quote"]) {
                    throw new Error("Symbol not found: " + symbol);
                }
                return res["Global Quote"]["05. price"];
            }, err => {
                console.log(err);
            });
    }
}
