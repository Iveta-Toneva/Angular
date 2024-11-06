function tickets(array: string[], sortingCriteria: string): Ticket[] {

    let ticketsArray: Ticket[] = [];

    for (const string of array) {
        let ticket: string[] = string.split('|');
        let destination: string = ticket[0];
        let price: number = Number(ticket[1]);
        let status: string = ticket[2];
        let singleTicket: Ticket = { destination, price, status };
        ticketsArray.push(singleTicket);
    }

    let criteria: string = sortingCriteria;

    if (criteria === 'destination') {
        ticketsArray = ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (criteria === 'price') {
        ticketsArray = ticketsArray.sort((a, b) => a.price - b.price);
    } else {
        ticketsArray = ticketsArray.sort((a, b) => a.status.localeCompare(b.status));
    }

    return ticketsArray;

}

type Ticket = {
    destination: string;
    price: number;
    status: string;
}

