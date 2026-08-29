export const RMQ_QUEUES = {
    AUTH: 'auth_queue',
    TRIP: 'trip_queue',
    BOOKING: 'booking_queue',
    PAYMENT: 'payment_queue',
    NOTIFICATION: 'notification_queue',
} as const;

export const RMQ_CLIENTS = {
    AUTH: 'AUTH_SERVICE',
    TRIP: 'TRIP_SERVICE',
    BOOKING: 'BOOKING_SERVICE',
    PAYMENT: 'PAYMENT_SERVICE',
    NOTIFICATION: 'NOTIFICATION_SERVICE',
} as const;

export const RMQ_PARTTERNS = {
    PING: 'system.ping',
    AUTH: {
        LOGIN: 'auth.login',
        REGISTER: 'auth.register',
    },
    TRIP: {
        FIND_ALL: 'trip.find-all',
        FIND_ONE: 'trip.find-one',
    },
    BOOKING: {
        CREATE: 'booking.create',
        CREATED: 'booking.created',
        CONFIRMED: 'booking.confirmed',
        CANCELED: 'booking.canceld',
    },
    PAYMENT: {
        CREATE: 'payment.create',
        SUCCESS: 'payment.success',
        FAILED: 'payment.failed',
    },
    NOTIFICATION: {
        SEND: 'notification.send',
    },
} as const;