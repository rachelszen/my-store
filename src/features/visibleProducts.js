export const visibleProducts = (products, { text, sortBy, showCategory }) => {
    const filtered = products.map(({category, items}) => 
        items.filter(({name}) => name.toLowerCase().includes(text.toLowerCase()) && category.toLowerCase().includes(showCategory.toLowerCase())));
    return filtered.flat(1).sort((a, b) => {
        if (sortBy === 'price'){
            return a.price > b.price ? 1 : -1;
        } else if (sortBy === 'alphabetical'){
            return a.name > b.name ? 1 : -1;
        }
    })
}