function editElement(ref, matck, replacer) {
    const text = ref.textContent;

    const result = text.split(matck).join(replacer);

    ref.textContent = result;
}