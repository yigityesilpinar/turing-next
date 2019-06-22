import moment from 'moment';

export const normalizeRating = (rating: number) => {
    if (rating > 5) {
        return 5;
    }
    if (rating < 0) {
        return 0;
    }
    return rating;
};

export const formatDateStr = (dateStr: string) => moment(dateStr).format('MMMM Do YYYY, h:mm:ss a');
