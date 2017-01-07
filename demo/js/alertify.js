/**
 * Created by Administrator on 2016/11/2.
 */
function alertify() {
    this.blankModal = function (title) {
        var html = '<div class = "alert-wrapper"><div class = "alert-mask"></div><disv class = "alert-body"><div class = "alert-alert">' + title + '</div></disv></div>'
        $("body").append(html);
        setTimeout(function () {
            $(".alert-wrapper").hide();
        }, 1000)
    }
    this.confirm = function (opt, fn1, fn2) {
        var defaults = {
            size: 'md',
            title: false,
            titleName: "提示",
            content: "确认进行当前操作吗？",
            okBtn: "是",
            cancelBtn: "否",
            self: "操作"
        };
        var options = $.extend(defaults, opt); //合并defaults 与 options
        var html = "";
        if (options.title) {
            html = '<div class = "modal-wrapper">' +
              '<div class="modal-mask"></div>' +
              '<div class="modal-body">' +
              '<div class="modal-title">' + options.titleName + '</div>' +
              '<div class="modal-detail">' + options.content + '</div>' +
              '<div class="modal-btn">' +
              '<span class="okCon">' + options.okBtn + '</span>' +
              '<span class="escCon">' + options.cancelBtn + '</span>' +
              '</div>' +
              '</div></div>';
        } else {
            html = '<div class = "modal-wrapper">' +
              '<div class="modal-mask"></div>' +
              '<div class="modal-body">' +
              '<div class="modal-detail">' + options.content + '</div>' +
              '<div class="modal-btn">' +
              '<span class="okCon">' + options.okBtn + '</span>' +
              '<span class="escCon">' + options.cancelBtn + '</span>' +
              '</div>' +
              '</div></div>';
        }
        $("body").append($(html));
        var ok = $(".okCon"),
          cls = $(".escCon");
        ok.on("click", function () {
            $(".modal-wrapper").remove();
            fn1();
        })
        cls.on("click", function () {
            $(".modal-wrapper").remove();
            fn2();
        })
    }
    this.prompt = function(opt, func){
        var defaults = {
            size: 'md',
            title: false,
            titleName: "提示",
            content: "确认进行当前操作吗？",
            okBtn: "确认",
            cancelBtn: "取消",
            info: "请输入内容："
        };
        var options = $.extend(defaults, opt); //合并defaults 与 options
        var html = "";
        if (options.title) {
            html = '<div class = "modal-wrapper">' +
                '<div class="modal-mask"></div>' +
                '<div class="modal-body">' +
                '<div class="modal-title">' + options.titleName + '</div>' +
                '<div class="modal-detail">' +
                '<div class="modal-label">'+ options.info +'</div><div class="modal-input"><input class = "input" type="text"></div>' +
                '</div>' +
                '<div class="modal-btn">' +
                '<span class="okCon">' + options.okBtn + '</span>' +
                '<span class="escCon">' + options.cancelBtn + '</span>' +
                '</div>' +
                '</div></div>';
        } else {
            html = '<div class = "modal-wrapper">' +
                '<div class="modal-mask"></div>' +
                '<div class="modal-body">' +
                '<div class="modal-detail">' +
                '<div class="modal-label">'+ options.info +'</div><div class="modal-input"><input class = "input" type="text"></div>' +
                '</div>' +
                '<div class="modal-btn">' +
                '<span class="okCon">' + options.okBtn + '</span>' +
                '<span class="escCon">' + options.cancelBtn + '</span>' +
                '</div>' +
                '</div></div>';
        }
        $("body").append($(html));
        var ok = $(".okCon"),
            cls = $(".escCon");
        ok.on("click", function () {
            if(func && typeof func == "function"){
                var data = $(".input").val();
                console.log(data);
                func.call(null, data);
            }
            $(".modal-wrapper").remove();
        })
        cls.on("click", function () {
            $(".modal-wrapper").remove();
        })
    }
}
var alerty = new alertify();
