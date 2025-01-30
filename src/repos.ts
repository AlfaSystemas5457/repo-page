interface ReposDataInteface {
    name: string,
    link: string,
    version?: string
}

interface DataInterface {
    repo?: ReposDataInteface[]
}

export const repos: DataInterface = {
    'repo': [
        {
            'name': 'Cuenta analitica con stock',
            'link': 'https://github.com/AlfaSystemas5457/account_analytic_with_stock',
            'version': '18.0'
        },
        {
            'name': 'Check stock',
            'link': 'https://github.com/AlfaSystemas5457/check_stock',
            'version': '12.0'
        },
    ],
}