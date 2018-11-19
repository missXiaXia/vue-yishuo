import {
    mapMutations,
    mapGetters
} from 'vuex'

export const setToastMsg = {
    methods: {
        ...mapMutations({
            setToastMsg: 'SET_TOAST_MSG'
        })
    }
}

