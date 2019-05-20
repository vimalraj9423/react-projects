import Messages from "../model/messages";
export const sendMessage = (fromId, toId, message) => {
    let data = new Messages({ fromId, toId, message });

    return (callback) => {
        data.save((err, data) => {
            console.log(data);
            callback(data)
        })
    }
}