angular.module('kcd.directives', []);
angular.module('kcd.directives').directive('kcdRecompile', [
    '$parse',
    '$timeout',
    function kcdRecompile($parse, $timeout){
        'use strict';
        return {
            transclude: true,
            link: function link(scope, $el, attrs, ctrls, transclude){
                var previousElements;
                var previousScope;
                var prevFocusedElemSelector;

                compile();

                scope.$watch(
                    attrs.kcdRecompile,
                    function compare(_new, _old){
                        var useBoolean = attrs.hasOwnProperty('useBoolean');
                        if(
                            (useBoolean && (!_new || _new === 'false')) ||
                            (!useBoolean && (!_new || _new === _old))
                        ){
                            return;
                        }
                        // reset kcdRecompile to false if we're using a boolean
                        if(useBoolean){
                            $parse(attrs.kcdRecompile).assign(scope, false);
                        }

                        recompile();
                    },
                    typeof $parse(attrs.kcdRecompile)(scope) === 'object'
                );

                function compile(){
                    transclude(scope.$new(false, scope), function handle(clone, clonedScope){
                        // transclude creates a clone containing all children elements;
                        // as we assign the current scope as first parameter, the clonedScope is the same
                        previousElements = clone;
                        previousScope = clonedScope;
                        $el.append(clone);
                        if(prevFocusedElemSelector){
                            $timeout(function setActiveElem(){
                                var activeElem = $el[0].querySelector(prevFocusedElemSelector);
                                if(activeElem){
                                    activeElem.focus();
                                }
                                prevFocusedElemSelector = null;
                            });
                        }
                    });
                }

                function recompile(){
                    prevFocusedElemSelector = getFocusedElemSelector($el[0]);
                    if(previousElements){
                        previousElements.remove();
                        previousElements = null;
                        $el.empty();
                    }
                    if(previousScope){
                        previousScope.$destroy();
                    }

                    compile();
                }

                function getFocusedElemSelector(elem){
                    if(document.activeElement === elem){
                        return getElementSelector(elem);
                    }
                    return checkChildren(elem);

                    function checkChildren(element){
                        var focusedElemSelector = false;
                        var children = element.childNodes;

                        children.forEach(function isFocused(item){
                            if(focusedElemSelector){
                                return;
                            }
                            if(document.activeElement === item){
                                focusedElemSelector = getElementSelector(item);
                                return;
                            }
                            if(item.childNodes){
                                focusedElemSelector = checkChildren(item);
                            }
                        });
                        return focusedElemSelector;
                    }
                }

                // https://stackoverflow.com/a/5728626
                function getElementSelector(elm){
                    var entry,
                        rightArrowParents = [];

                    for (elm; elm; elm = elm.parentNode){
                        entry = elm.tagName.toLowerCase();
                        if(entry === 'html'){
                            break;
                        }
                        if(elm.className){
                            entry += '.' + elm.className.replace(/ /g, '.');
                        }
                        rightArrowParents.push(entry);
                        if(elm.parentNode === $el[0]){
                            break;
                        }
                    }
                    rightArrowParents.reverse();
                    return rightArrowParents.join(' ');
                }
            }
        };
    }
]);
