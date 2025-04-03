


interface ChargeRequest {
    cardId: string;
    amount: number;
    currency?: string; // por si quieres permitir configurarlo luego
}