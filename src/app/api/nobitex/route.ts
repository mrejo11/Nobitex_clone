import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://api.nobitex.ir/market/stats?srcCurrency=btc,eth,usdt,doge,shib,trx&dstCurrency=rls', {
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
} 