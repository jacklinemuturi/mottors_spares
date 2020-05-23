(function($){
    "use strict"; // Start of use strict

    /* Add to Cart Sticky */
    function add_cart_sticky(){
        if($('.sticky-addcart').length > 0){
            $('.sticky-addcart').each(function(){
                var self = $(this);
                var cart = self.prev().find('form.cart');
                var st = $(window).scrollTop();
                var ot = cart.offset().top;
                console.log(ot);
                var stop = $('#footer').offset().top - $(window).height();
                if( st > ot && st < stop){
                    self.addClass('active');
                }else{
                    self.removeClass('active');
                }
            });
        }
    }
    /* toggle accordition tab */
    function accordition_tab(){

        if($('.toggle-tab').length>0){
            $('.toggle-tab').each(function(){
                $(this).find('.item-toggle-tab.active .toggle-tab-content').slideDown();
                $(this).find('.toggle-tab-title').on('click',function(event){
                    if($(this).next().length>0){
                        event.preventDefault();
                        var self = $(this);
                        self.parent().siblings().removeClass('active');
                        self.parent().toggleClass('active');
                        self.parents('.toggle-tab').find('.toggle-tab-content').slideUp();
                        self.next().stop(true,false).slideToggle();
                    }
                });
            });
        }
    }

    function shop_department_click(){
        $('.header-2-menu .col-search-cart .wpb_text_column .fa.fa-bars').on('click',function (event) {
            event.preventDefault();
            $('.header-2-menu .col-search-cart .wpb_wrapper > .product-catelist.style3').toggleClass('active');
        });
        $('.header4-row2 .menu-col-3 .wpb_text_column .fa.fa-bars').on('click',function (event) {
            event.preventDefault();
            $('.header4-row2 .menu-col-3 .wpb_wrapper > .product-catelist.style3').toggleClass('active');
        });
    }
    function fix_click_srcoll_top(){
        $('.title-page .sort-pagi-bar .sort-by .dropdown-link,.title-page .sort-pagi-bar .show-number .dropdown-link,.hd5-row-1 .language-box > a,.hd5-row-1 .currency-box > a,.hd5-department > a').on("click",function (event) {
            event.preventDefault();
        });
    }

    /// Wishlist Ajax
    $("body").on("click",".add_to_wishlist",function(e){
        //e.preventDefault();
        var product_id = $(this).attr("data-product_id");
        var seff = $(this);
        $.ajax({
            type : "post",
            url : ajax_process.ajaxurl,
            crossDomain: true,
            data: {
                action: "add_to_cart",
                product_id: product_id
            },
            success: function(data){
                seff.find('.fa-spinner').remove();
                seff.append('<i class="fa fa-check"></i>');
                var cart_content = data.fragments['div.widget_shopping_cart_content'];
                $('.mini-cart-main-content').html(cart_content);
                $('.widget_shopping_cart_content').html(cart_content);
                var count_item = cart_content.split("item-info-cart").length;
                $('.set-cart-number').html(count_item-1);
                $('.set-cart-items').html(count_item-1+(" items -"));
                var price = $('.mini-cart-main-content').find('.get-cart-price').html();
                if(price) $('.set-cart-price').html(price);
                else $('.set-cart-price').html($('.total-default').html());
            },
            error: function(MLHttpRequest, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });
    });

    function get_wishlist_count(){
        var counter = $('.wishlist-number');
        if(counter.length > 0){
            $.ajax({
                url: yith_wcwl_l10n.ajax_url,
                data: {
                    action: 'yith_wcwl_update_wishlist_count'
                },
                dataType: 'json',
                success: function( data ){
                    counter.html( data.count );
                },
                beforeSend: function(){
                    //loading
                },
                complete: function(){
                    //done
                }
            });
        }
    }

    function product_countdown(){
        if($('.countdown').length>0){
            $('.countdown').each(function(){
                var txt_d = $(this).parents('.item-product-grid-style2').data('txtd');
                if (txt_d == '') { txt_d = "days"}
                var txt_h = $(this).parents('.item-product-grid-style2').data('txth');
                if (txt_h == '') { txt_h = "hours"}
                var txt_m = $(this).parents('.item-product-grid-style2').data('txtm');
                if (txt_m == '') { txt_m = "minutes"}
                var txt_s = $(this).parents('.item-product-grid-style2').data('txts');
                if (txt_s == '') { txt_s = "seconds"}
                $(this).TimeCircles({
                    count_past_zero: false,
                    time: {
                        Days: 	{show: true, text: txt_d, color: "#000000"},
                        Hours: 	{show: true, text: txt_h, color: "#000000"},
                        Minutes: {show: true, text: txt_m, color: "#000000"},
                        Seconds: {show: true, text: txt_s, color: "#000000"}
                    }
                });
            });
        }
    }

    // equal min-height

    function set_min_height(){
        if($('.get-height-wrap').length > 0){
            $('.get-height-wrap').each(function () {
                 var min_height =  $(this).find('.get-height').height();
                 $(this).find('.set-height').css('min-height',min_height);
            })
        }
    }

    // search by product terms
    function get_prd_term_val(){
        if($('.search-form-taxonomy').length > 0){
            $('.search-form-taxonomy').each(function(){
                var _pointer = $(this);
                _pointer.find('select[name="tax_product_make"]').on("change",function (event) {
                    event.preventDefault();
                    var make_val = $(this).val();
                    /* call product model */
                    _pointer.find('select[name="tax_product_model"] option').each(function () {
                        $(this).addClass("hidden");
                        if($(this).hasClass("default")){
                            $(this).removeClass("hidden");
                        }
                        var str_make = $(this).attr('data-make');
                        if($(this).attr('data-make') != "" && $(this).attr('data-make') != undefined){
                            var make_arr = str_make.split(",");
                            var is_InMake = false;
                            is_InMake = make_arr.includes(make_val);
                            if(is_InMake == true){
                                $(this).removeClass("hidden");
                            }
                        }
                    });
                    /* reset product year, model, trim */
                    _pointer.find('select[name="tax_product_year"] option').each(function () {
                        $(this).addClass("hidden");
                        if($(this).hasClass("default")){
                            $(this).removeClass("hidden");
                        }
                        $(this).find('option.default').attr('selected','selected');
                        $(this).parents('select[name="tax_product_year"]').val("");
                    });
                    _pointer.find('select[name="tax_product_model"] option').each(function () {
                        $(this).find('option.default').attr('selected','selected');
                        $(this).parents('select[name="tax_product_model"]').val("");
                    });
                    _pointer.find('select[name="tax_product_trim"] option').each(function () {
                        $(this).addClass("hidden");
                        if($(this).hasClass("default")){
                            $(this).removeClass("hidden");
                        }
                        $(this).find('option.default').attr('selected','selected');
                        $(this).parents('select[name="tax_product_trim"]').val("");
                    });
                });
                _pointer.find('select[name="tax_product_model"]').on("change",function (event) {
                    event.preventDefault();
                    var selected = $(this).val();

                    // show related year
                    var str_years = $(this).find('option[value="'+selected+'"]').attr("data-year");
                    var year_arr = str_years.split(",");
                    _pointer.find('select[name="tax_product_year"] option').each(function () {
                        $(this).addClass("hidden");
                        if($(this).hasClass("default")){
                            $(this).removeClass("hidden");
                        }
                        var is_InYear = false;
                        is_InYear = year_arr.includes($(this).attr('value'));
                        if(is_InYear == true){
                            $(this).removeClass("hidden");
                        }
                    });

                    // show related trim
                    var str_trims = $(this).find('option[value="'+selected+'"]').attr("data-trim");
                    var trim_arr = str_trims.split(",");
                    _pointer.find('select[name="tax_product_trim"] option').each(function () {
                        $(this).addClass("hidden");
                        if($(this).hasClass("default")){
                            $(this).removeClass("hidden");
                        }
                        var is_InTrim = false;
                        is_InTrim = trim_arr.includes($(this).attr('value'));
                        if(is_InTrim == true){
                            $(this).removeClass("hidden");
                        }
                    });
                });

                $('.input-submit').on('click',function (e) {
                    e.preventDefault();
                    var vin_text = _pointer.find('input[name="tax_product_vin"]').val();
                    if(vin_text != undefined && vin_text != ""){
                        _pointer.find('select[name="tax_product_make"]').val("");
                        _pointer.find('select[name="tax_product_model"]').val("");
                        _pointer.find('select[name="tax_product_year"]').val("");
                        _pointer.find('select[name="tax_product_trim"]').val("");
                        _pointer.submit();
                    }else{
                        _pointer.submit();
                    }
                })

            })

        }
        if($('.search-form-taxonomy').length > 0){
            $('.search-form-taxonomy').each(function(){
                var _pointer = $(this);
                // show option
                _pointer.find('.tax-select .select-wrap').on('click',function (event) {
                    event.preventDefault();
                    $(this).toggleClass('active');
                    //_pointer.find('.tax-select .select-wrap .option-wrap').not($(this)).addClass('visible-hidden');
                    $(this).find('.option-wrap').toggleClass('visible-hidden');
                });
                //select option
                _pointer.find('.tax-select .select-wrap .option-wrap li').on('click',function (event) {
                    _pointer.find('.tax-select .select-wrap .option-wrap li').removeClass('active');
                    event.preventDefault();
                    var text = $(this).text();
                    var value = $(this).attr('data-slug');
                    var tax = $(this).parents('.tax-select').attr('data-tax');
                    $(this).addClass("active");
                    $(this).parents('.tax-select').find('input[name="tax_product_'+tax+'"]').val(value);
                    $(this).parents('.select-wrap').find('.opt-default').text(text);
                })

                // product make on change
                _pointer.find('.make-select .opt-default').on('DOMSubtreeModified',function (event) {
                    event.preventDefault();
                    var make_val = $(this).parents('.select-wrap').find('.option-wrap li.active').attr('data-slug');
                    console.log(make_val);
                    /* call product model */
                    _pointer.find('.model-select .option-wrap li').each(function () {
                        $(this).addClass("hidden");
                        if($(this).hasClass("default")){
                            $(this).removeClass("hidden");
                        }
                        var str_make = $(this).attr('data-make');
                        if($(this).attr('data-make') != "" && $(this).attr('data-make') != undefined){
                            var make_arr = str_make.split(",");
                            var is_InMake = false;
                            is_InMake = make_arr.includes(make_val);
                            if(is_InMake == true){
                                $(this).removeClass("hidden");
                            }
                        }
                        /* reset product year, model, trim */
                        _pointer.find('.model-select .opt-default').text("Model");
                        _pointer.find('.year-select .opt-default').text("Year");
                        _pointer.find('.trim-select .opt-default').text("Trim");
                    });


                });
                // product model on change
                _pointer.find('.model-select .opt-default').on('DOMSubtreeModified',function (event){
                    event.preventDefault();
                    var str_years = $(this).parents('.select-wrap').find('.option-wrap li.active').attr('data-year');

                    // show related year
                    if(typeof(str_years) == "string" && str_years != ""){
                        var year_arr = str_years.split(",");
                        _pointer.find('.year-select .option-wrap li').each(function () {
                            $(this).addClass("hidden");
                            if($(this).hasClass("default")){
                                $(this).removeClass("hidden");
                            }
                            var is_InYear = false;
                            is_InYear = year_arr.includes($(this).attr('data-slug'));
                            if(is_InYear == true){
                                $(this).removeClass("hidden");
                            }
                        });
                    }
                    // show related trim
                    var str_trims = $(this).parents('.select-wrap').find('.option-wrap li.active').attr('data-trim');
                    if(typeof(str_trims) == "string" && str_trims != ""){
                        var trim_arr = str_trims.split(",");
                        _pointer.find('.trim-select .option-wrap li').each(function () {
                            $(this).addClass("hidden");
                            if($(this).hasClass("default")){
                                $(this).removeClass("hidden");
                            }
                            var is_InTrim = false;
                            is_InTrim = trim_arr.includes($(this).attr('data-slug'));
                            if(is_InTrim == true){
                                $(this).removeClass("hidden");
                            }
                        });
                    }
                });
                //submit form

                $('.input-submit').on('click',function (e) {
                    e.preventDefault();
                    var vin_text = _pointer.find('input[name="tax_product_vin"]').val();
                    if(vin_text != undefined && vin_text != ""){
                        _pointer.find('input[name="tax_product_make"]').val("");
                        _pointer.find('input[name="tax_product_model"]').val("");
                        _pointer.find('input[name="tax_product_year"]').val("");
                        _pointer.find('input[name="tax_product_trim"]').val("");
                        _pointer.submit();
                    }else{
                        _pointer.submit();
                    }
                })

            });
        }
    }


    $(document).ready(function(){
        fix_click_srcoll_top();
        accordition_tab();
        shop_department_click();
        get_wishlist_count();
        product_countdown();
        get_prd_term_val();
        set_min_height();
        //Fancy Box
        if($('.fancybox').length>0){
            $('.fancybox').fancybox();
        }
        if($('.fancybox-media').length>0){
            $('.fancybox-media').on('click',function () {
                $.fancybox({
                    'padding'       : 0,
                    'autoScale'     : false,
                    'transitionIn'  : 'elastic',
                    'transitionOut' : 'elastic',
                    'title'         : this.title,
                    'width'         :    640,
                    'height'        :    360,
                    'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                    'type'          : 'swf',
                    'swf'           : {
                        'wmode'        : 'transparent',
                        'allowfullscreen'   : 'true'
                    }
                });

                return false;
            })
        }
    });
    $(window).resize(function () {
        set_min_height();
    });

    $(document).on('load',function () {
        add_cart_sticky();
    });
    $(document).on('scroll',function () {
        add_cart_sticky();
    });

    $(document).on( 'added_to_wishlist removed_from_wishlist', function(){
        get_wishlist_count();
    } )


})(jQuery);

