const token = `7b9b4db23b6f232ba5a9c08a486968f29ae21a44815533a2`;

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://salt-elite-fedora.glitch.me/api/my_cars`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://salt-elite-fedora.glitch.me/api/my_cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create')
        }
        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://salt-elite-fedora.glitch.me/api/my_cars/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error(`Failed to update`)
        }
        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://salt-elite-fedora.glitch.me/api/my_cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },

        })
        if (!response.ok) {
            throw new Error(`Failed to update`)
        }
        return
    },

}

