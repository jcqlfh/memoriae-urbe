<ul class="grid">
    <li><img src="/images/pictures/nggyu.gif" alt="Never gonna give you up"/></li>
</ul>

<script>
    import { showFooter } from '../state/showFooter';
    import { showHeader } from '../state/showHeader';
    showFooter.update(value => ({ show: false, path: "/home.html", text: "Home"}));
    showHeader.update(value => false);
</script>