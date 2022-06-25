export class Durability{

    async durabilityCreate(num){
        if (num == 0) return "100/100";
        if (num == 1) return "200/200";
        if (num == 2) return "300/300";
        if (num == 3) return "500/500";
        if (num == 4) return "800/800";
        if (num == 5) return "1000/1000";
    }
}
