export const setAuthors = author => ({
    type: 'SET_AUTHORS',
    payload: author
})

export const setNextPage = (page) => ({
    type: 'SET_NEXT_PAGE',
    payload: page
})

export const setPrevPage = (page) => ({
    type: 'SET_PREV_PAGE',
    payload: page
})
