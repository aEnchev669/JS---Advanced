function crew(arr) {

    if (arr.dizziness) {
        arr.levelOfHydrated += arr.experience * 0.1;
        arr.dizziness = false;
    }

    return(arr);
}

console.log(crew({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
}));