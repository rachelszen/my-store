export const visibleProducts = (products, { text, sortBy, showCategory }) => {
    return products.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(text.toLowerCase())
        const categoryMatch = product.category.toLowerCase().includes(showCategory.toLowerCase())

        return nameMatch && categoryMatch
    }).sort((a, b) => {
        if (sortBy === 'price'){
            return a.price > b.price ? 1 : -1;
        } else if (sortBy === 'alphabetical'){
            return a.name > b.name ? 1 : -1;
        }
    })
}