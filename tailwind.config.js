tailwind.config={
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(150px, 1fr))'
            },
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            color:{
                darkTheme:'#11001F'
            }
            
        }
    },

    darkMode:'selector'
}