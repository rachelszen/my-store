export const getVisibleProducts = (products, { text, sortBy }) => {
    return products.filter((product) => {
        const textMatch = product.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'price'){
            return a.price > b.price ? 1 : -1;
        } else if (sortBy === 'alphabetical'){
            return a.name > b.name ? 1 : -1;
        }
    })
}
