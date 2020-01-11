'use strict';


const $this = module.exports = {
    
    index: (req, res) => {
        return  res.json({
            success: true,
            message: 'welcome'
        });
    },

    
}
