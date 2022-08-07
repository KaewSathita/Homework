let total = 0;
let total_even = 0;
let total_odd = 0;
let total_mod2_2 = 0;
let total_mod3_2 = 0;

for (i=1; i<=100; i++) {
    total += i;
    if (i % 2 === 0){
        total_even += i
    }
    if (i % 2 !== 0){
        total_odd += i;
    }
    if (i % 2 === 0){
        total_mod2_2 += Math.pow(i,2);
    }
    if (i % 3 === 0){
        total_mod3_2 += Math.pow(i,2);
    }
    totalMod2_2MinusMod3_2 = total_mod2_2 - total_mod3_2

}


console.log("total = " + total);
console.log("total even = " + total_even);
console.log("total odd = " + total_odd);
console.log("total mod2^2 = " + total_mod2_2);
console.log("total mod3^2 = " + total_mod3_2);
console.log("total_Mod2_2_Minus_Mod3_2 = " + totalMod2_2MinusMod3_2);

